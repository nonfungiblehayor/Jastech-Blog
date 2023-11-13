import Link from "next/link";
import styled from "styled-components";

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
`;
const AirtimeBanner = () => {
  return (
    <StyledBanner>
      <div>
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
    </StyledBanner>
  );
};
export default AirtimeBanner;
