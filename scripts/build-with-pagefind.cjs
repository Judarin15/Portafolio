/* This is a script to build the site with Pagefind */

const { execSync } = require('child_process');
const { cpSync, existsSync, renameSync, rmSync } = require('fs');
const { join } = require('path');

// Detect the platform
function detectPlatform() {
  // Check environment variables
  if (process.env.VERCEL) {
    return 'vercel';
  }
  if (process.env.CF_PAGES) {
    return 'cloudflare';
  }
  if (process.env.NETLIFY) {
    return 'netlify';
  }
  if (process.env.GITHUB_ACTIONS) {
    return 'github';
  }
  

  // Default to standard dist directory
  return 'default';
}

// Get Pagefind output directory
function getPagefindOutputDir(platform) {
  const outputDirs = {
    vercel: '.vercel/output/static',
    cloudflare: 'dist',
    netlify: 'dist',
    github: 'dist',
    default: 'dist'
  };
  
  return outputDirs[platform] || 'dist';
}

// Main function
function main() {
  const platform = detectPlatform();
  const outputDir = getPagefindOutputDir(platform);
  
  console.log(`🚀 Detected deployment platform: ${platform}`);
  console.log(`📁 Pagefind output directory: ${outputDir}`);
  
  try {
    // Versión en español -> dist/
    console.log('🔨 Building Spanish site...');
    execSync('npx astro build', { stdio: 'inherit', cwd: process.cwd() });
    if (!existsSync(outputDir)) {
      console.error(`❌ Output directory does not exist: ${outputDir}`);
      process.exit(1);
    }
    console.log('🔍 Indexing Spanish site...');
    execSync(`npx pagefind --site ${outputDir}`, { stdio: 'inherit', cwd: process.cwd() });

    // Demás idiomas -> dist-<código>/ y luego dist/<código>/
    const otherLanguages = ['en', 'fr', 'de', 'ru', 'zh', 'ja', 'ko', 'tr', 'id'];
    for (const lang of otherLanguages) {
      const tempDir = `dist-${lang}`;
      console.log(`🔨 Building ${lang} site...`);
      execSync('npx astro build', {
        stdio: 'inherit',
        cwd: process.cwd(),
        env: { ...process.env, PUBLIC_SITE_LANG: lang },
      });
      console.log(`🔍 Indexing ${lang} site...`);
      execSync(`npx pagefind --site ${tempDir}`, { stdio: 'inherit', cwd: process.cwd() });
      rmSync(join(outputDir, lang), { recursive: true, force: true });
      try {
        renameSync(tempDir, join(outputDir, lang));
      } catch (err) {
        // En Windows el antivirus o el editor pueden bloquear el renombrado (EPERM): copiar y borrar
        if (err.code !== 'EPERM' && err.code !== 'EBUSY') throw err;
        cpSync(tempDir, join(outputDir, lang), { recursive: true });
        rmSync(tempDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
      }
    }

    console.log('✅ Build completed!');
    console.log(`📊 Search index generated at: ${outputDir}/pagefind/`);
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

main();
