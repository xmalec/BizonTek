const fs = require('fs');
const assetVersion = require("../../public/version.json");

function getAssetUrl(path) {
  return `${path}?v=${assetVersion.version}`;
}

// Funkce pro generování manifest.json
function generateManifest(outputPath) {
  const manifest = {
    short_name: "Jiří Malec",
    name: "Jiří Malec - Softwarový vývojář | Vývoj softwaru na míru",
    icons: [
      {
        src: getAssetUrl("favicon.ico"),
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: getAssetUrl("logo192.webp"),
        type: "image/webp",
        sizes: "192x192",
      },
      {
        src: getAssetUrl("logo512.webp"),
        type: "image/webp",
        sizes: "512x512",
      },
    ],
    start_url: ".",
    display: "standalone",
    theme_color: "#efbe40",
    background_color: "#001724",
  };

  // Uložení JSON souboru
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
}

module.exports = { generateManifest };
