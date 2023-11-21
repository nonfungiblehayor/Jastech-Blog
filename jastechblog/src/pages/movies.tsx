import MoviePage from "@/components/Movies";
import { NextPageWithLayout } from "./_app";
import { Sofia_Sans } from "next/font/google";
const inter = Sofia_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Movies: NextPageWithLayout = () => {
  return (
    <>
      <main className={` ${inter.className}`}>
        <MoviePage />
      </main>
    </>
  );
};
export default Movies;
