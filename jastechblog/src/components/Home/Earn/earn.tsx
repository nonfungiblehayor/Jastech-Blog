import Image from "next/image";
import styled from "styled-components";

const StyledEarn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  padding-bottom: 30px;
  h1 {
    width: 87vw;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    color: #f65050;
    font-size: 24px;
    font-weight: 500;
  }
  .wide-frame {
    width: 87vw;
    height: 450px;
    display: flex;
    flex-direction: column;
    background-image: url("/img/bg1.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 25px;
    margin-bottom: 25px;
    justify-content: flex-end;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 50px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
  .conainer {
    width: 85vw;
  }
  h3 {
    font-size: 15px;
    font-weight: 500;
    width: 200px;
  }
  .normal-frame {
    gap: 15px;
  }
`;
const EarnCash = () => {
  const updates = [
    {
      img: "/img/bg1.png",
      heading: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
    },
    {
      img: "/img/bg1.png",
      heading: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
    },
    {
      img: "/img/bg1.png",
      heading: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
    },
  ];
  return (
    <StyledEarn>
      <section>
        <h1>Earn Cash</h1>
        <div className="wide-frame">
          <h2>Amanda Seyfried became‘really obsessed’ with ghost stories</h2>
        </div>
        <div className="container flex-row">
          {updates.map((item, index) => (
            <div className="normal-frame flex-row" key={index}>
              <Image src={item.img} alt="frame" width={130} height={100} />
              <h3>{item.heading}</h3>
            </div>
          ))}
        </div>
      </section>
    </StyledEarn>
  );
};
export default EarnCash;
