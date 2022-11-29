
// import layout  components form components folder
import Layout from "../Components/layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}