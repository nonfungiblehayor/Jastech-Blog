import styled from "styled-components";
import { Sofia } from "next/font/google";

const inter = Sofia({ weight: ["400"], subsets: ["latin"] });

const StyledNews = styled.section`
  width: 85vw;
  padding-top: 25px;
  margin-bottom: 25px;
  .big-frame,
  .small-frames,
  .medium-frames {
    width: 70vw;
    height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url("/img/bg1.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 25px 20px 30px 20px;
  }
  .news-type {
    width: 64px;
    height: 22px;
    background-color: #08f;
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    padding-top: 5px;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 36px;
    font-weight: 500;
    width: 550px;
    p {
      font-size: 12px;
      font-weight: 400;
    }
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
  }
  .small-frames {
    width: 235px;
    height: 278px;
    padding: 10px 10px 20px 10px;
    background-size: cover;
    margin-right: 0px;
  }
  .small-frame-text {
    font-size: 14px;
    font-weight: 500;
    width: 200px;
  }
  .medium-frames {
    width: 485px;
    height: 278px;
    background-color: red;
    background-size: cover;
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    padding-top: 15px;
    .mobile {
      display: flex;
      flex-direction: column;
    }
    .big-frame {
      width: 85vw;
      height: 270px;
      padding-bottom: 20px;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      gap: 15px;
    }
    .small-frames,
    .medium-frames {
      width: 85vw;
      height: 150px;
    }
    h3 {
      font-size: 22px;
      width: 65vw;
    }
  }
`;
const News = () => {
  const news = [
    {
      type: "News-type",
      date: "10-3-2024",
      headlines: " After all is said and done, more is done",
      className: "small-frames",
    },
    {
      type: "News-type",
      date: "10-3-2024",
      headlines: " After all is said and done, more is done",
      className: "small-frames",
    },
    {
      type: "News-type",
      date: "10-3-2024",
      headlines: " After all is said and done, more is done",
      className: "medium-frames",
    },
  ];
  return (
    <StyledNews>
      <section className="flex-row mobile">
        <div className="big-frame">
          <p className="news-type">News type</p>
          <h3>
            <p>Date</p>
            After all is said and done, more is done
          </h3>
        </div>
        <div className="container">
          {news.map((item, index) => (
            <div className={item.className} key={index}>
              <p className="news-type">{item.type}</p>
              <h2 className="small-frame-text">
                <p>{item.date}</p>
                {item.headlines}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </StyledNews>
  );
};
export default News;
