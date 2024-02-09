import styled from "styled-components";

const StyledAds = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  h1 {
    width: 85vw;
    border-bottom: 1px solid #000;
    color: #f65050;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  .conatainer {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .wide-frame {
    width: 85vw;
    height: 400px;
    background-color: #f650502b;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    padding-left: 20px;
  }
  p {
    background-color: #997c00;
    width: 80px;
    height: 24px;
    text-align: center;
    padding-top: 4px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
  }
  h2 {
    color: #fff;
    font-size: 36px;
    font-weight: 500;
    width: 600px;
    text-align: center;
  }
  @media (max-width: 768px) {
    .wide-frame {
      background-size: cover;
      height: 300px;
      background-position: center;
    }
    h2 {
      font-size: 22px;
      width: 75vw;
    }
  }
`;
const Ads = () => {
  const ads = [
    {
      type: "Free Ads",
      heading: "Play This Game for Free on Epic Store this Weekend",
    },
  ];
  return (
    <StyledAds>
      <section>
        <h1>Top Ads</h1>
        <div className="container">
          {ads.map((item, index) => (
            <div className="wide-frame" key={index}>
              <h2>Coming Soon</h2>
            </div>
          ))}
        </div>
      </section>
    </StyledAds>
  );
};
export default Ads;
