import Head from "next/head";
import { Sofia_Sans } from "next/font/google";
import Nav from "@/components/Layout/Nav";

const inter = Sofia_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jastech blog</title>
        <meta name="description" content="Jatech blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <Nav />
      </main>
    </>
  );
}
