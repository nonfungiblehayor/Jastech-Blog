import Image from "next/image";
import styled from "styled-components";

const StyledTrend = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  padding-top: 20px;
  .trend-tabs {
    border-bottom: 1px solid #000;
    padding-bottom: 16px;
    margin-bottom: 20px;
    p {
      color: #000;
      margin-top: -10px;
    }
  }
  .active-tab {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
  .each {
    gap: 10px;
  }
  h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #000;
    font-size: 15px;
    font-weight: 400;
    width: 200px;
    span {
      font-size: 8px;
      color: rgba(57, 57, 57, 0.6);
    }
  }
`;
const Trending = () => {
  const Trendtabs = ["Trending", "Recent", "Most Views"];
  const activeTabs = [
    {
      image: "/img/bg1.png",
      date: "27-10-2023",
      title: "Gluten-Free Almond Cake with Berries",
    },
    {
      image: "/img/bg1.png",
      date: "27-10-2023",
      title: "Gluten-Free Almond Cake with Berries",
    },
    {
      image: "/img/bg1.png",
      date: "27-10-2023",
      title: "Gluten-Free Almond Cake with Berries",
    },
    {
      image: "/img/bg1.png",
      date: "27-10-2023",
      title: "Gluten-Free Almond Cake with Berries",
    },
    {
      image: "/img/bg1.png",
      date: "27-10-2023",
      title: "Gluten-Free Almond Cake with Berries",
    },
  ];
  return (
    <StyledTrend>
      <div>
        <div className="trend-tabs flex-row">
          {Trendtabs.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="active-tab">
          {activeTabs.map((item, index) => (
            <div key={index} className="each flex-row">
              <Image
                src={item.image}
                alt="movie image"
                width={70}
                height={70}
              />
              <h2>
                <span>{item.date}</span>
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </StyledTrend>
  );
};
export default Trending;
