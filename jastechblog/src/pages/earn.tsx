import { NextPageWithLayout } from "./_app";
import { Sofia_Sans } from "next/font/google";
import EarnPage from "@/components/Earn";
const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });
const Earn: NextPageWithLayout = () => {
  return (
    <>
      <main className={` ${inter.className}`}>
        <EarnPage />
      </main>
    </>
  );
};
export default Earn;
