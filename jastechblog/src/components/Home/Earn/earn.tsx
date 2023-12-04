import Image from "next/image";
import styled from "styled-components";

const StyledEarn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  padding-bottom: 30px;
  margin-bottom: 60px;
  h1 {
    width: 85vw;
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
    color: #f65050;
    font-size: 24px;
    font-weight: 500;
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
  .container {
    width: 85vw;
    display: grid;
    grid-template-columns: auto auto auto;
    padding-top: 50px;
    row-gap: 20px;
  }
  h3 {
    font-size: 15px;
    font-weight: 500;
    width: 200px;
  }
  .normal-frame {
    gap: 10px;
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    .wide-frame {
      width: 85vw;
      height: 250px;
    }
    h2 {
      font-size: 14px;
      width: 300px;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
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
    {
      img: "/img/bg1.png",
      heading: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
    },
  ];
  return (
    <StyledEarn>
      <section>
        <h1>Earn Cash</h1>
        <div className="container">
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
