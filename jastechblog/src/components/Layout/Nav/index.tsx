import PreHead from "./PreHead";
import Image from "next/image";
import Link from "next/link";
import StyledNav from "./style";
import { Sofia_Sans } from "next/font/google";

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
  return (
    <>
      <PreHead />
      <StyledNav>
        <header>
          <div className={` flex-row ${sofia.className}`}>
            <Image src="/img/Logo.png" alt="logo" width={247} height={62} />
            <div className="ads flex-row">
              <p>
                Best Selling Data and Airtime <br />
                Vendor of all time <br />
                <span>At affordable rate</span>
              </p>
              <Link href="/">
                <p className="purchase-link">Purchase Now</p>
              </Link>
            </div>
          </div>
          <nav className="flex-row">
            {links.map((item, index) => (
              <Link href={item.link} key={index}>
                {" "}
                <p>{item.text}</p>
              </Link>
            ))}
          </nav>
        </header>
      </StyledNav>
    </>
  );
};
export default Nav;
