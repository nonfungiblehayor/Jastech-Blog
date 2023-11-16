import Image from "next/image";
import StyledNewsPage from "@/styles/StyledNewsPage";
const NewsPage = () => {
  const topNews = [
    {
      type: "politics",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline:
        "Institutional delivery vital for reducing maternal and neonatal deaths",
    },
    {
      type: "politics",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline:
        "Institutional delivery vital for reducing maternal and neonatal deaths",
    },
    {
      type: "politics",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline:
        "Institutional delivery vital for reducing maternal and neonatal deaths",
    },
  ];
  const otherNews = [
    {
      type: "politics",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline:
        "Institutional delivery vital for reducing maternal and neonatal deaths",
    },
    {
      type: "politics",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline:
        "Institutional delivery vital for reducing maternal and neonatal deaths",
    },
    {
      type: "politics",
      img: "/img/bg2.png",
      date: "16-11-2023",
      headline:
        "Institutional delivery vital for reducing maternal and neonatal deaths",
    },
  ];
  return (
    <StyledNewsPage>
      <section>
        <h1>News</h1>
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
export default NewsPage;
