import { NextPageWithLayout } from "./_app";
import { Sofia_Sans } from "next/font/google";
const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });
import NewsPage from "@/components/News";
const News: NextPageWithLayout = () => {
  return (
    <>
      <main className={` ${inter.className}`}>
        <NewsPage />
      </main>
    </>
  );
};
export default News;
