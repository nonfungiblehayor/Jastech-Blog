import styled from "styled-components";
import { Sofia } from "next/font/google";
import Link from "next/link";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";

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
  const newsId = process.env.NEXT_PUBLIC_NEWS_ID;
  const [mainNews, setMainNews] = useState<
    [
      {
        fields: {
          Headline: "";
          Date: "";
          NewsType: "";
          Summary: "";
        };
      },
    ]
  >();
  const news = mainNews?.slice(1, 6);
  const getNews = () => {
    api
      .get(`${newsId}?maxRecords=5`)
      .then((response) => setMainNews(response.data.records))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <StyledNews>
      <section className="flex-row mobile">
        <div className="big-frame">
          <p className="news-type">
            {mainNews ? mainNews[0].fields.NewsType : ""}
          </p>
          <h3>
            <p>{mainNews ? mainNews[0].fields.Date : ""}</p>
            {mainNews ? mainNews[0].fields.Headline : ""}
          </h3>
        </div>
        <div className="container">
          {news?.map((item, index) => (
            <Link href="/each">
              <div className="small-frames" key={index}>
                <p className="news-type">{item.fields.NewsType}</p>
                <h2 className="small-frame-text">
                  <p>{item.fields.Date}</p>
                  {item.fields.Headline}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </StyledNews>
  );
};
export default News;
