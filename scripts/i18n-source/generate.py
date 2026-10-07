"""Genera los archivos traducidos del portafolio a partir de content_<idioma>.py.

Uso: python3 scripts/i18n-source/generate.py
"""
import importlib, json, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.dirname(__file__))
LANGS = ["fr", "de", "ru", "zh", "ja", "ko", "tr", "id"]

def english_keys():
    keys = set()
    for base, _, files in os.walk(os.path.join(ROOT, "src")):
        for f in files:
            if f.endswith((".astro", ".svelte", ".ts")) and f != "site-strings.ts":
                s = open(os.path.join(base, f), encoding="utf-8").read()
                keys |= set(re.findall(r'\bt\(\s*"(?:[^"\\]|\\.)*",\s*"((?:[^"\\]|\\.)*)"', s))
                keys |= set(re.findall(r'\btv\(\s*"(?:[^"\\]|\\.)*",\s*"((?:[^"\\]|\\.)*)"', s))
    return keys

def write_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        f.write("\n")

def main():
    needed = english_keys()
    site_strings = {}
    for lang in LANGS:
        m = importlib.import_module(f"content_{lang}")
        missing = sorted(k for k in needed if k not in m.S)
        if missing:
            raise SystemExit(f"[{lang}] faltan textos: {missing}")
        site_strings[lang] = m.S
        for folder, table in (("projects", m.P), ("skills", m.K), ("timeline", m.T)):
            d = os.path.join(ROOT, "src/data", folder)
            ids = {f[:-5] for f in os.listdir(d) if f.endswith(".json")}
            if set(table) != ids:
                raise SystemExit(f"[{lang}] {folder}: no coincide {set(table) ^ ids}")
            for item_id, block in table.items():
                p = os.path.join(d, item_id + ".json")
                data = json.load(open(p, encoding="utf-8"))
                data[lang] = block
                write_json(p, data)
        open(os.path.join(ROOT, f"src/content/spec/about-{lang}.md"), "w", encoding="utf-8").write(m.ABOUT)
        out = os.path.join(ROOT, f"src/content/posts-{lang}")
        os.makedirs(out, exist_ok=True)
        for slug, (title, description, body) in m.POSTS.items():
            src = open(os.path.join(ROOT, "src/content/posts-en", slug + ".md"), encoding="utf-8").read()
            fm = src.split("---")[1]
            fm = re.sub(r"^title:.*$", "title: " + json.dumps(title, ensure_ascii=False), fm, flags=re.M)
            fm = re.sub(r"^description:.*$", "description: " + json.dumps(description, ensure_ascii=False), fm, flags=re.M)
            fm = re.sub(r"^category:.*$", "category: " + json.dumps(m.CATEGORY, ensure_ascii=False), fm, flags=re.M)
            open(os.path.join(out, slug + ".md"), "w", encoding="utf-8").write("---" + fm + "---\n\n" + body.strip() + "\n")
        print(f"[{lang}] ok")
    ts = ['/**', ' * Textos propios del portafolio en cada idioma (generado por scripts/i18n-source/generate.py).',
          ' * La clave es el texto en inglés; el español se escribe directamente en el código con t("es", "en").',
          ' * Los textos con {x} son plantillas: tv("es {x}", "en {x}", valor).', ' */',
          'export const siteStrings: Record<string, Record<string, string>> = ' + json.dumps(site_strings, ensure_ascii=False, indent=4) + ';', '']
    open(os.path.join(ROOT, "src/i18n/site-strings.ts"), "w", encoding="utf-8").write("\n".join(ts))

main()
