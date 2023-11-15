import Link from "next/link";
import styled from "styled-components";
import Icons from "./icons";
import { useState } from "react";

const StyledBanner = styled.div`
  margin-bottom: 0px;
  background-image: url("/img/adsBg.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 771px;
  height: 90px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  .line {
    display: none;
  }
  .ads {
    justify-content: space-between;
  }
  p:nth-of-type(1) {
    font-size: 14px;
    font-weight: 400;
    span {
      color: #f65050;
    }
  }
  @media (max-width: 768px) {
    width: 85vw;
    height: 250px;
    background-size: cover;
    padding-bottom: 15px;
    .ads {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;
      p {
        text-align: center;
      }
    }
    .line {
      display: flex;
    }
    .purchase-link {
      background-color: red;
      padding: 10px;
      border-radius: 5px;
    }
  }
`;
const AirtimeBanner = () => {
  const [activeSim, setSim] = useState<string>("mtn");
  const changeTab = () => {
    const timer = setTimeout(() => {
      if (activeSim === "mtn") {
        setSim("glo");
      } else if (activeSim === "glo") {
        setSim("airtel");
      } else if (activeSim === "airtel") {
        setSim("9mobile");
      } else if (activeSim === "9mobile") {
        setSim("mtn");
      }
    }, 800);
  };
  changeTab();
  return (
    <StyledBanner>
      <div>
        <div className="ads flex-row">
          <p>
            Best Selling Data and Airtime <br />
            Vendor of all time <br />
            <span>At affordable rate</span>
          </p>
          <span className="line">
            {" "}
            <Icons type={activeSim} />{" "}
          </span>
          <Link href="/">
            <p className="purchase-link">Purchase Now</p>
          </Link>
        </div>
      </div>
    </StyledBanner>
  );
};
export default AirtimeBanner;
