import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import GA4 from "../src/components/Layout/GA4";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow,snippet,archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jiří Malec" />
        <meta
          name="description"
          content="BizonTek | Jiří Malec. Vývoj moderního softwaru na míru."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/logo512.png" />

        <meta
          property="og:image"
          content="https://www.bizontek.cz/img/metadata/image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bizontek.cz/" />
        <meta property="og:title" content="BizonTek | Jiří Malec" />
        <meta
          property="og:description"
          content="BizonTek | Jiří Malec. Vývoj moderního softwaru na míru."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.bizontek.cz/" />
        <meta property="twitter:title" content="BizonTek | Jiří Malec" />
        <meta
          property="twitter:description"
          content="BizonTek | Jiří Malec. Vývoj moderního softwaru na míru."
        />
        <meta
          property="twitter:image"
          content="https://www.bizontek.cz/img/metadata/image.jpg"
        />
        <meta name="theme-color" content="#efbe40" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>BizonTek | Jiří Malec</title>
      </Head>
      <GA4 />
      <Layout />
    </>
  );
}
