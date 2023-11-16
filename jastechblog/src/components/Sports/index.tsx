import { sportTabs } from "../Shared/tabs";
import Image from "next/image";
import StyledNewsPage from "@/styles/StyledNewsPage";
const SportPage = () => {
  const topNews = [
    {
      type: "Football",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline: "Solskjaer dismisses Klopp comments on Man Utd penalty record",
    },
    {
      type: "Football",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline: "Solskjaer dismisses Klopp comments on Man Utd penalty record",
    },
    {
      type: "Football",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline: "Solskjaer dismisses Klopp comments on Man Utd penalty record",
    },
  ];
  const otherNews = [
    {
      type: "Football",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline: "Solskjaer dismisses Klopp comments on Man Utd penalty record",
    },
    {
      type: "Football",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline: "Solskjaer dismisses Klopp comments on Man Utd penalty record",
    },
    {
      type: "Football",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline: "Solskjaer dismisses Klopp comments on Man Utd penalty record",
    },
  ];
  return (
    <StyledNewsPage>
      <section>
        <div className="tabs">
          <h1 style={{ borderBottom: "none" }}>Sport</h1>
          <nav className="flex-row">
            {sportTabs.map((item, index) => (
              <p key={index} style={{ backgroundColor: item.color }}>
                {item.text}
              </p>
            ))}
          </nav>
        </div>
        <div className="top-news flex-row">
          {topNews.map((item, index) => (
            <div className="each-news" key={index}>
              <div
                className="frame"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <p className="tag">{item.type}</p>
              </div>
              <span>{item.date}</span>
              <h2>{item.headline}</h2>
              <p className="thread">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate ...
              </p>
            </div>
          ))}
        </div>
        <div className="other-news">
          {otherNews.map((item, index) => (
            <div className="each-one flex-row" key={index}>
              <Image
                src={item.img}
                width={150}
                height={100}
                alt="each"
                className="each-img"
              />
              <h3>
                <p className="news-tag">
                  {" "}
                  {item.type.toUpperCase()} - <span>{item.date}</span>
                </p>
                {item.headline}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </StyledNewsPage>
  );
};
export default SportPage;
