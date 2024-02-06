import { NextPageWithLayout } from "./_app";
import { Sofia_Sans } from "next/font/google";
const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });
import NewsPage from "@/components/News";
import ContextHandler from "./api/ErrorContext";
const News: NextPageWithLayout = () => {
  return (
    <ContextHandler>
      <main className={` ${inter.className}`}>
        <NewsPage />
      </main>
    </ContextHandler>
  );
};
export default News;
