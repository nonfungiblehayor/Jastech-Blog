import Icons from "@/components/Shared/icons";
import styled from "styled-components";

const StyledSport = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-top: 10px;
  .head {
    color: #f65050;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    width: 270px;
  }
  .socials {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 15px;
    row-gap: 10px;
  }
  .each {
    width: 130px;
    height: 40px;
    p {
      color: #fff;
      font-size: 8px;
      font-weight: 500;
    }
  }
  .newsletter {
    width: 270px;
    background-color: #dedada;
    height: 195px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  input {
    width: 220px;
    height: 40px;
    background-color: #fff;
    text-align: center;
    color: #000;
    font-size: 12px;
    font-weight: 400;
    border: none;
  }
  button {
    background-color: #f65050;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    width: 220px;
    border: none;
    height: 40px;
  }
`;
const StayConnected = () => {
  const socials = [
    {
      type: "facebook",
      followers: "1500",
      bg: "#4281FF",
    },
    {
      type: "twitter",
      followers: "1500",
      bg: "#42C0F5",
    },
    {
      type: "instagram",
      followers: "1500",
      bg: "#C23785",
    },
    {
      type: "web",
      followers: "1500",
      bg: "#F7679D",
    },
  ];
  return (
    <StyledSport>
      <div>
        <p className="head">Stay Connected</p>
        <div className="socials">
          {socials.map((item, index) => (
            <div
              className="each flex-row"
              key={index}
              style={{ backgroundColor: item.bg }}
            >
              <Icons type={item.type} />
              <p>
                1500 <br />
                {item.type !== "web" ? "followers" : "users"}
              </p>
            </div>
          ))}
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </StyledSport>
  );
};
export default StayConnected;
