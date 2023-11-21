import { NextPageWithLayout } from "./_app";
import { Sofia_Sans } from "next/font/google";
import AdsPage from "@/components/Ads";
const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });
const Ads: NextPageWithLayout = () => {
  return (
    <>
      <main className={` ${inter.className}`}>
        <AdsPage />
      </main>
    </>
  );
};
export default Ads;
