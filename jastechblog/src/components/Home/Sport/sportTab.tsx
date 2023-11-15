import Image from "next/image";
import StyledMoviesTab from "@/styles/StyledMoviesTab";
const SportTab = () => {
  const tabs = [
    {
      text: "All",
      color: "#F65050",
    },
    {
      text: "Football",
      color: "#A56CBD",
    },
    {
      text: "Basketball",
      color: "#08F",
    },
    {
      text: "Cricket",
      color: "#49EFC8",
    },
    {
      text: "Tennis",
      color: "#2ECC71",
    },
    {
      text: "Formular1",
      color: "#997C00",
    },
    {
      text: "Boxing",
      color: "#08F",
    },
  ];
  const otherNews = [
    {
      img: "/img/bg1.png",
      date: "27 Dec 2020",
      heading: "Penn’s expanding political climate gears up for 2020 election",
    },
    {
      img: "/img/bg1.png",
      date: "27 Dec 2020",
      heading: "Penn’s expanding political climate gears up for 2020 election",
    },
    {
      img: "/img/bg1.png",
      date: "27 Dec 2020",
      heading: "Penn’s expanding political climate gears up for 2020 election",
    },
    {
      img: "/img/bg1.png",
      date: "27 Dec 2020",
      heading: "Penn’s expanding political climate gears up for 2020 election",
    },
    {
      img: "/img/bg1.png",
      date: "27 Dec 2020",
      heading: "Penn’s expanding political climate gears up for 2020 election",
    },
  ];
  return (
    <StyledMoviesTab>
      <div>
        <div className="tabs">
          <h1>Sport</h1>
          <nav className="flex-row">
            {tabs.map((item, index) => (
              <p style={{ backgroundColor: item.color }} key={index}>
                {item.text}
              </p>
            ))}
          </nav>
        </div>
        <div className="top-movies flex-row">
          <div className="stand-alone">
            <Image
              src="/img/bg1.png"
              alt="bg"
              width={393}
              height={250}
              className="img-frame"
            />
            <span>27 Dec 2020</span>
            <h2>Now Is the Time to Think About Your Small Business Success</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              lobortis augue condimentum maecenas. Metus at in fames vitae
              posuere ut vel vulputate....
            </p>
          </div>
          <div className="container">
            {otherNews.map((item, index) => (
              <div key={index} className="each flex-row">
                <Image src={item.img} alt="bg" width={90} height={70} />
                <h2>
                  <span>{item.date}</span>
                  {item.heading}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledMoviesTab>
  );
};
export default SportTab;
