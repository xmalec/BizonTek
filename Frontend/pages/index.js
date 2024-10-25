/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import GA4 from "../src/components/Layout/GA4";

export default function Home() {
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
          content="Jiří Malec | BizonTek - Vývoj softwaru na míru pro webové aplikace, portály, informační systémy a e-shopy. Kontaktujte mě!"
        />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="icon" type="image/png" href="./logo512.webp" />

        <meta
          property="og:image"
          content="https://www.bizontek.cz/img/metadata/image.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bizontek.cz/" />
        <meta property="og:title" content="BizonTek | Jiří Malec" />
        <meta
          property="og:description"
          content="Jiří Malec | BizonTek - Vývoj softwaru na míru pro webové aplikace, portály, informační systémy a e-shopy. Kontaktujte mě!"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.bizontek.cz/" />
        <meta property="twitter:title" content="BizonTek | Jiří Malec" />
        <meta
          property="twitter:description"
          content="Jiří Malec | BizonTek - Vývoj softwaru na míru pro webové aplikace, portály, informační systémy a e-shopy. Kontaktujte mě!"
        />
        <meta
          property="twitter:image"
          content="https://www.bizontek.cz/img/metadata/image.webp"
        />
        <meta name="theme-color" content="#efbe40" />

        <link rel="manifest" href="manifest.json" />
        <link rel="stylesheet" href="./styles/fontawesome/css/all.css" />
        <title>BizonTek | Jiří Malec</title>
      </Head>
      <GA4 />
      <Layout />
    </>
  );
}
