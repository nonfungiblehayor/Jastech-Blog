import PreHead from "./PreHead";
import Image from "next/image";
import Link from "next/link";
import StyledNav from "./style";
import { Sofia_Sans } from "next/font/google";
import AirtimeBanner from "@/components/Shared/airtimeBanner";
import Icons from "@/components/Shared/icons";
import { useRef } from "react";

const sofia = Sofia_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const Nav = () => {
  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "News",
      link: "",
    },
    {
      text: "Sport",
      link: "",
    },
    {
      text: "Movies",
      link: "",
    },
    {
      text: "Advertise your product",
      link: "",
    },
    {
      text: "Airtime & Data",
      link: "",
    },
    {
      text: "Earn cash",
      link: "",
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
      <PreHead />
      <StyledNav>
        <header>
          <div className={` flex-row ${sofia.className} div`}>
            <Image
              src="/img/Logo.png"
              alt="logo"
              width={247}
              height={62}
              className="logo"
            />
            <AirtimeBanner />
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
