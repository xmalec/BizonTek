/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import GA4 from "../src/components/Layout/GA4";
import { useEffect } from "react";
import { AssetHelper } from "../src/utils/AssetHelper";

export default function Home() {
  useEffect(() => {
    document.documentElement.lang = "cs";
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow,snippet,archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jiří Malec" />
        <meta
          name="description"
          content="Jiří Malec - Softwarový vývojář se specializací na .NET a Microsoft technologie. Zkušenosti, dovednosti, portfolio a kontakt přímo na webu."
        />
        <link rel="shortcut icon" href={`${AssetHelper.getAssetUrl("./favicon.ico")}`} />
        <link rel="icon" type="image/png" href={`${AssetHelper.getAssetUrl("./logo512.webp")}`} />
        
        <link rel="canonical" href="https://bizontek.cz" />

        <meta
          property="og:image"
          content={`${AssetHelper.getAssetUrl("https://bizontek.cz/img/metadata/image.webp")}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bizontek.cz/" />
        <meta property="og:title" content="BizonTek | Jiří Malec" />
        <meta
          property="og:description"
          content="Jiří Malec - Vývojář v .NET a Microsoft technologiích. Prohlédněte si životopis, portfolio nebo mě kontaktujte přes webový formulář."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bizontek.cz/" />
        <meta property="twitter:title" content="BizonTek | Jiří Malec" />
        <meta
          property="twitter:description"
          content="Jiří Malec - Vývojář v .NET a Microsoft technologiích. Prohlédněte si životopis, portfolio nebo mě kontaktujte přes webový formulář."
        />
        <meta
          property="twitter:image"
          content={`${AssetHelper.getAssetUrl("https://bizontek.cz/img/metadata/image.webp")}`}
        />
        <meta name="theme-color" content="#efbe40" />

        <link rel="manifest" href={`${AssetHelper.getAssetUrl("manifest.json")}`} />
        <title>Jiří Malec - .NET vývojář | Vývoj softwaru na míru</title>
      </Head>
      <GA4 />
      <Layout />
    </>
  );
}
