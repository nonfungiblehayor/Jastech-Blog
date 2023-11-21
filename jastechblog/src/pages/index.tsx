import { Sofia_Sans } from "next/font/google";
import { NextPageWithLayout } from "./_app";
import News from "@/components/Home/News";
import Movies from "@/components/Home/Movies/Movies";
import EarnCash from "@/components/Home/Earn/earn";
import Sport from "@/components/Home/Sport/sport";
import Ads from "@/components/Home/Ads/ads";
import Airtime from "@/components/Home/airtime";

const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className={` ${inter.className}`}>
        <News />
        <Movies />
        <EarnCash />
        <Sport />
        <Ads />
        <Airtime />
      </main>
    </>
  );
};
export default Home;
