import PreHead from "./PreHead";
import Image from "next/image";
import Link from "next/link";
import StyledNav from "./style";
import { Sofia_Sans } from "next/font/google";
import AirtimeBanner from "@/components/Shared/airtimeBanner";
import Icons from "@/components/Shared/icons";
import { useRef } from "react";
import Head from "next/head";

const sofia = Sofia_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const Nav = () => {
  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "News",
      link: "/news",
    },
    {
      text: "Sport",
      link: "/sport",
    },
    {
      text: "Movies",
      link: "/movies",
    },
    {
      text: "Advertise your product",
      link: "/ads",
    },
    {
      text: "Earn cash",
      link: "/earn",
    },
  ];
  const linkRef = useRef<any>();
  const displayMenu = () => {
    if (
      linkRef.current.style.display === "" ||
      linkRef.current.style.display === "none"
    ) {
      linkRef.current.style.display = "flex";
    } else if (linkRef.current.style.display === "flex") {
      linkRef.current.style.display = "none";
    }
  };
  return (
    <>
      <Head>
        <title>Jastech blog</title>
        <meta name="description" content="Jatech blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <PreHead />
      <StyledNav>
        <header>
          <div className={` flex-row ${sofia.className} div`}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={258}
              height={200}
              className="logo"
            />
            {/* <AirtimeBanner /> */}
            <span className="menu-btn" onClick={displayMenu}>
              <Icons type="hamburger" />
            </span>
          </div>
          <div className="flex-row links" ref={linkRef}>
            {links.map((item, index) => (
              <Link href={item.link} key={index}>
                {" "}
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </header>
      </StyledNav>
    </>
  );
};
export default Nav;
