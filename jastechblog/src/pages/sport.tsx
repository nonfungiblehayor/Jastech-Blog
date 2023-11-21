import { NextPageWithLayout } from "./_app";
import { Sofia_Sans } from "next/font/google";
const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });
import SportPage from "@/components/Sports";
const Sport: NextPageWithLayout = () => {
  return (
    <>
      <main className={` ${inter.className}`}>
        <SportPage />
      </main>
    </>
  );
};
export default Sport;
