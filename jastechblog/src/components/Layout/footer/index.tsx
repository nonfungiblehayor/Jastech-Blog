import Image from "next/image";
import Social from "@/components/Shared/social";
import Link from "next/link";
import styled from "styled-components";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const StyledFooter = styled.footer`
  background-color: #393939;
  padding-top: 35px;
  padding-bottom: 35px;
  h2 {
    font-size: 24px;
    font-weight: 400;
    border-bottom: 1px solid "#fff";
    width: 270px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  div:nth-of-type(1) {
    .logo {
      margin-bottom: 20px;
    }
    p {
      width: 270px;
      margin-bottom: 20px;
    }
  }
  nav {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    margin-top: 20px;
    p {
      width: 104px;
      height: 34px;
      text-align: center;
      padding-top: 10px;
    }
  }
  div:nth-of-type(2) {
    margin-top: -45px;
  }
  div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    p {
      width: 250px;
      line-height: 20px;
      margin-top: 13px;
    }
  }
  input,
  button {
    background-color: #fff;
    border: none;
    width: 270px;
    height: 40px;
    font-size: 12px;
    font-weight: 400;
    color: #c4c4c4;
    text-align: center;
    margin-top: 13px;
  }
  button {
    background-color: #f65050;
    color: #fff;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    .flex-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    nav {
      grid-template-columns: auto auto auto;
    }
    div:nth-of-type(1) {
      align-self: center;
      p {
        text-align: center;
      }
      div:nth-of-type(1) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
    }
    div:nth-of-type(2) {
      align-self: center;
      margin-top: 0px;
      h2 {
        display: none;
      }
    }
    div:nth-of-type(3) {
      align-self: center;
      p,
      h2 {
        text-align: center;
      }
    }
  }
`;
const Footer = () => {
  const tags = [
    {
      text: "News",
      color: "#F65050",
      link: "",
    },
    {
      text: "Sport",
      color: "#0088FF",
      link: "",
    },
    {
      text: "Movies",
      color: "#A56CBD",
      link: "",
    },
    {
      text: "Ads",
      color: "#997C00",
      link: "",
    },
    {
      text: "Technology",
      color: "#FFB8B8",
      link: "",
    },
    {
      text: "Airtime & Data",
      color: "#49CFE8",
      link: "",
    },
    {
      text: "Earn cash",
      color: "#4281FF",
      link: "",
    },
  ];
  return (
    <StyledFooter>
      <footer className={` flex-row ${sofia.className} flex-col`}>
        <div>
          <Image
            src="/img/logo2.png"
            alt="logo"
            width={247}
            height={62}
            className="logo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
            pellentesque dictum posuere id diam rutrum.
          </p>
          <Social />
        </div>
        <div>
          <h2>Tags</h2>
          <nav>
            {tags.map((item, index) => (
              <Link href={item.link} key={index}>
                <p style={{ backgroundColor: item.color }}>{item.text}</p>
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Stay In Touch</h2>
          <p>
            To be updated with all the latest news, offers and special
            annoucements.
          </p>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </footer>
    </StyledFooter>
  );
};
export default Footer;
