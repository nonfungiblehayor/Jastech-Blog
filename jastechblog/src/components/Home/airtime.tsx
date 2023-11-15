import AirtimeBanner from "../Shared/airtimeBanner";
import styled from "styled-components";

const StyledAdShow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 280px;
  margin-top: 8px;
  .stand-alone {
    width: 270px;
    height: 290px;
    background-image: url("/img/bg1.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    margin-top: 15px;
  }
  p {
    width: 270px;
    border-bottom: 1px solid #000;
    font-size: 18px;
    color: #f65050;
    padding-bottom: 10px;
  }
  @media (max-width: 768px) {
    p {
      width: 85vw;
    }
    .stand-alone {
      width: 85vw;
    }
  }
`;

const StyledAirtime = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  h1 {
    width: 820px;
    border-bottom: 1px solid #000;
    color: #f65050;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  .parent {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 768px) {
    .mobile {
      display: flex;
      flex-direction: column;
    }
    .parent,
    h1 {
      width: 85vw;
    }
  }
`;

const AdsShow = () => {
  return (
    <StyledAdShow>
      <div>
        <p>Special Offers</p>
        <div className="stand-alone">10gb for #500</div>
      </div>
    </StyledAdShow>
  );
};
const Airtime = () => {
  return (
    <StyledAirtime>
      <section
        className="flex-row mobile"
        style={{ alignItems: "flex-start", gap: "10px" }}
      >
        <div className="parent">
          <h1>Airtime & Data</h1>
          <AirtimeBanner />
        </div>
        <AdsShow />
      </section>
    </StyledAirtime>
  );
};
export default Airtime;
