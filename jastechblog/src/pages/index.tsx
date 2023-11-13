import Head from "next/head";
import { Sofia_Sans } from "next/font/google";
import { NextPageWithLayout } from "./_app";
import News from "@/components/Home/News";
import Movies from "@/components/Home/Movies/Movies";
import EarnCash from "@/components/Home/Earn/earn";
import Sport from "@/components/Home/Sport/sport";

const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Jastech blog</title>
        <meta name="description" content="Jatech blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <News />
        <Movies />
        <EarnCash />
        <Sport />
      </main>
    </>
  );
};
export default Home;
