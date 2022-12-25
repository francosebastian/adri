
// import layout  components form components folder
import Layout from "../Components/layout";
import Head from 'next/head'
import Script from "next/script";
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Script id="Adsense-id" data-ad-client="ca-pub-1201976462089227"
            async strategy="afterInteractive"
            onError={ (e) => { console.error('Script failed to load', e) }}
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
    <Head>
        <title>Adri Gestion Inmobiliaria</title>
        <meta name='description' content='Venta de parcelas region metropolitana melipilla'/>
    </Head>
    <Component {...pageProps} />
    </Layout>
  );
}
