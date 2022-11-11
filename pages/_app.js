import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Catalog Site</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp