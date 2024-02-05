import Image from "next/image";
import StyledNewsPage from "@/styles/StyledNewsPage";
import Link from "next/link";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
import Loading from "../Shared/loading";
const NewsPage = () => {
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
        Image: [
          {
            url: "";
          },
        ];
      };
    },
  ]
>();                                                                 
const [loadingState, setLoading] = useState<boolean>(false)                                                                                              
const getNews = () => {
  setLoading(true)
  api
    .get(`${newsId}?sort%5B0%5D%5Bfield%5D=Headline&filterByFormula=AND(%7BLatest%7D+%3D+'Yes')&maxRecords=9`)
    .then((response) => (setMainNews(response.data.records), setLoading(false)))
    .catch((error) => (console.error(error.response.data.error.message)));
};
useEffect(() => {
  getNews();
}, []);
  return (
    <StyledNewsPage>
      <section id="news">
        <h1>News</h1>
        {loadingState ? <Loading /> : 
        <div className="top-news news-grid">
          {mainNews?.map((item, index) => (
            <Link href={`/news/${item.id}`}>
            <div className="each-news each-grid" key={index}>
              <div
                className="frame"
                style={{ backgroundImage: `url(${item.fields.Image[0].url})` }}
              >
                <p className="tag">{item.fields.NewsType}</p>
              </div>
              <span>{item.fields.Date}</span>
              <h2>{item.fields.Headline}</h2>
            </div>
            </Link>
          ))}
        </div>
        }                          
      </section>
    </StyledNewsPage>
  );
};
export default NewsPage;
