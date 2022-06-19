import Head from "next/head";
import { HeroSection } from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mehmet Sumer</title>
        <meta name="description" content="Mehmet Sumer's portfolio Website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </>
  );
};

export default Home;
