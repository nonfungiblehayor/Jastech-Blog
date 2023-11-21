import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledEarnPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    width: 85vw;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    row-gap: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .each {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 280px;
    gap: 10px;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    color: #393939;
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
    width: 270px;
    color: #000;
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: auto;
      justify-content: center;
    }
  }
`;
const EarnPage = () => {
  const updates = [
    {
      date: "11/03/2023",
      title: "Survey App: Earn $10 by filling survey forms",
      img: "/img/bg3.png",
      link: "/",
    },
    {
      date: "11/03/2023",
      title: "Survey App: Earn $10 by filling survey forms",
      img: "/img/bg3.png",
      link: "/",
    },
    {
      date: "11/03/2023",
      title: "Survey App: Earn $10 by filling survey forms",
      img: "/img/bg3.png",
      link: "/",
    },
    {
      date: "11/03/2023",
      title: "Survey App: Earn $10 by filling survey forms",
      img: "/img/bg3.png",
      link: "/",
    },
    {
      date: "11/03/2023",
      title: "Survey App: Earn $10 by filling survey forms",
      img: "/img/bg3.png",
      link: "/",
    },
    {
      date: "11/03/2023",
      title: "Survey App: Earn $10 by filling survey forms",
      img: "/img/bg3.png",
      link: "/",
    },
  ];
  return (
    <StyledEarnPage>
      <section>
        <div className="container">
          {updates.map((item, index) => (
            <Link href={item.link}>
              <div className="each" key={index}>
                <Image
                  src={item.img}
                  alt="image"
                  className="bgImg"
                  width={270}
                  height={200}
                />
                <p>Valid till - {item.date}</p>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </StyledEarnPage>
  );
};
export default EarnPage;
