import Head from "next/head";
import Portfolio from "../components/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio - Liban</title>
        <meta
          name="description"
          content="Check out my portfolio of web development projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Portfolio />
    </>
  );
};

export default PortfolioPage;
