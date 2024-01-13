import Image from "next/image";
import styled from "styled-components";
import StayConnected from "@/components/Home/Sport/stayConnected";
import Ads from "@/components/Home/Ads/ads";

export const StyledEachNewsPage = styled.section`
  .each-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  color: #393939;
  .first-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    gap: 20px;
    height: auto;
    border-right: 1px solid #393939;
    margin-right: 15px;
    padding-bottom: 40px;
  }
  .error-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 25px;
    p {
      font-size: 30px;
    }
  }
  h1 {
    align-self: center;
    width: 500px;
    align-self: flex-start;
  }
  .type_date {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
  }
  .tag {
    background-color: #0088ff;
    width: 120px;
    text-align: center;
    padding: 2px;
    color: #fff;
  }
  .cover-img {
    align-self: center;
  }
  .ads-pop {
    width: 300px;
    align-self: center;
    height: 300px;
    background-image: url("/img/bg1.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-top: 25px;
  }
  .details {
    line-height: 20px;
    width: 58vw;
  }
  @media (max-width: 768px) {
    div:nth-of-type(2) {
      display: none;
    }
    .cover-img {
      width: 300px;
    }
    .first-div {
      border-right: none;
      width: 85vw;
    }
    .details {
      width: 80vw;
    }
    h1 {
      width: 80vw;
      font-size: 20px;
    }
  }
`;
const EachNewsPage = () => {
  return (
    <StyledEachNewsPage>
      <section className="each-section">
        <div className="first-div">
          <h1>
            LATEST DAD!!! Congratulations Pour In As Victony Welcomes Bouncing
            Baby Girl (PHOTO)
          </h1>
          <p className="type_date">Posted on 4/12/2023</p>
          <Image
            src="/img/bg1.png"
            alt="news img"
            width={485}
            height={300}
            className="cover-img"
          />
          <p className="tag">Entertaiment</p>
          <h2>
            Afrobeats sensation, Victony, is overjoyed as he becomes a father
            after welcoming a bouncing baby girl with his partner.
          </h2>
          <div className="ads-pop">Ads</div>
          <p className="details">
            THE NAF HAS NOT UNDERTAKEN ANY AIR OPERATIONS IN KADUNA STATE IN THE
            LAST 24 HOURS The news making the rounds alleging that Nigerian Air
            Force (NAF) aircraft accidentally killed innocent civilians in
            Kaduna is false. Please be informed that the NAF has not carried out
            any air operations within Kaduna State and environs in the last 24
            hours. Also, note that the NAF is not the only organization
            operating combat armed drones in the North western region of
            Nigeria. It is also important to ensure that due diligence is always
            exhausted by the media before going to press with unverified and
            unconfirmed reports. Thank you.
          </p>
        </div>
        <StayConnected showAds />
      </section>
    </StyledEachNewsPage>
  );
};
export default EachNewsPage;
