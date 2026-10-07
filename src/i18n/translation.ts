import { siteConfig } from "@/config";
import { en } from "./languages/en";
import { es } from "./languages/es";
import { fr } from "./languages/fr";
import { de } from "./languages/de";
import { ru } from "./languages/ru";
import { ko } from "./languages/ko";
import { tr } from "./languages/tr";
import { id } from "./languages/id";
import { ja } from "./languages/ja";
import { zh } from "./languages/zh";
import type I18nKey from "./i18nKey";


export type Translation = {
    [K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
    en: en,
    en_us: en,
    en_gb: en,
    en_au: en,
    zh: zh,
    zh_cn: zh,
    ja: ja,
    ja_jp: ja,
    es: es,
    es_es: es,
    es_co: es,
    fr: fr,
    de: de,
    ru: ru,
    ko: ko,
    tr: tr,
    id: id,
};

export function getTranslation(lang: string): Translation {
    return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey): string {
    const lang = siteConfig.lang || "en";
    return getTranslation(lang)[key];
}