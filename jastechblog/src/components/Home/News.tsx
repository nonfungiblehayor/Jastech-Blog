import styled from "styled-components";
import { Sofia } from "next/font/google";
import Link from "next/link";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
import Loading from "../Shared/loading";

const inter = Sofia({ weight: ["400"], subsets: ["latin"] });

const StyledNews = styled.section`
  width: 85vw;
  padding-top: 25px;
  margin-bottom: 25px;
  .news-type {
    width: 84px;
    height: 22px;
    background-color: #08f;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    padding-top: 5px;
    padding-bottom: 25px;
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
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    width: 100vw;
    gap: 20px;
  }
  .small-frames {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26vw;
    height: 278px;
    background-image: url("/img/bg1.png");
    background-repeat: no-repeat;
    padding: 10px 10px 20px 10px;
    background-size: cover;
    margin-right: 0px;
  }
  .small-frame-text {
    font-size: 20px;
    font-weight: 500;
    width: 300px;
    line-height: 25px;
  }
  @media (max-width: 1450px) and (min-width: 1200px) {
    .small-frames {
      width: 350px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 15px;
    .mobile {
      display: flex;
      flex-direction: column;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      gap: 15px;
    }
    .small-frames {
      width: 85vw;
      height: 250px;
    }
    .small-frame-text {
      font-size: 12px;
    }
  }
`;
const News = () => {
  const newsId = process.env.NEXT_PUBLIC_NEWS_ID;
  const [mainNews, setMainNews] = useState<
    [
      {
        id: "";
        fields: {
          Headline: "";
          Date: "";
          NewsType: "";
          Summary: "";
        };
      },
    ]
  >();
  const [loadingState, setLoading] = useState<boolean>(false);
  const news = mainNews?.slice(1, 6);
  const getNews = () => {
    setLoading(true)
    api
      .get(`${newsId}?filterByFormula=AND(%7BLatest%7D+%3D+'Yes')&maxRecords=4`)
      .then((response) => (setMainNews(response.data.records), setLoading(false)))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <StyledNews>
      <section className="flex-row mobile">
        {loadingState ? <Loading /> :
        <div className="container">
          {news?.map((item, index) => (
            <Link href={`news/${item.id}`} key={index}>
              <div className="small-frames">
                <p className="news-type">{item.fields.NewsType}</p>
                <h2 className="small-frame-text">
                  <p style={{ marginBottom: "10px" }}>{item.fields.Date}</p>
                  {item.fields.Headline}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        }
      </section>
    </StyledNews>
  );
};
export default News;
