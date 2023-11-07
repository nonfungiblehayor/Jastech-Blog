import PreHead from "@/components/Shared/PreHead";
import Image from "next/image";
import Link from "next/link";
import StyledNav from "./style";
const Nav = () => {
    const links = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'News',
            link: ''
        },
        {
            text: 'Sport',
            link: ''
        },
        {
            text: 'Movies',
            link: ''
        },
        {
            text: 'Ads',
            link: ''
        },
        {
            text: 'Airtime & Data',
            link: ''
        },
        {
            text: 'Earn cash',
            link: ''
        },
    ]
  return ( <>
    <PreHead />
    <StyledNav>
      <header>
        <div className="flex-row">
            <Image src='/img/Logo.png' alt="logo" width={247} height={62}/>
            <div className="ads flex-row">
                <p>
                    Best Selling Data and Airtime <br/>
                    Vendor of all time <br/>
                    <span>At affordable rate</span>
                </p>
                <Link href='/'>
                    <p className="purchase-link">Purchase Now</p>
                </Link>
            </div>
        </div>
        <nav className="flex-row">
            {links.map((item, index) => (
              <Link href={item.link} key={index}> <p>{item.text}</p></Link>  
            ))}
        </nav>
      </header>
      </StyledNav>
      </>
  );
};
export default Nav;
