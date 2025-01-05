const fs = require('fs');
const path = require('path');

// Funkce pro generování sitemapy
function generateSitemap(outputPath) {
  const urls = [
    { loc: 'https://bizontek.cz/', changefreq: 'weekly', priority: '1.0' },
    { loc: 'https://bizontek.cz/files/cv_jiri_malec.pdf', changefreq: 'weekly', priority: '1.0' },
  ];

  const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  )
  .join('')}
</urlset>
  `.trim();

  // Uložení souboru na zadanou cestu
  fs.writeFileSync(outputPath, sitemapContent);
}

module.exports = { generateSitemap };
