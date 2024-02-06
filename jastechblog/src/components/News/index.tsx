import StyledNewsPage from "@/styles/StyledNewsPage";
import Link from "next/link";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
import Loading from "../Shared/loading";
import Button from "../Shared/button";


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
const [oldNews, setOldNews] = useState<
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
const [loadingState, setLoading] = useState(false)    
const [loadingMore, setLoadingMore] = useState(false) 
const [loadNumber, setLoadNumber] = useState<number>(0)         
const [errorMessage, setErrorMessage] = useState<string>()    
const [loadError, setLoadError] = useState<string>()                                                                             
const getNews = () => {
  setLoading(true)
  api
    .get(`${newsId}?&filterByFormula=AND(%7BLatest%7D+%3D+'Yes')&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=6`)
    .then((response) => (setMainNews(response.data.records), setLoading(false)))
    .catch((error) => (setErrorMessage(error.response.data.error.message)))
    .finally(() => setLoading(false))
};
const loadMore = (amount: number) => {
  setLoadingMore(true)
  api.get(`${newsId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BLatest%7D+%3D+'No')&maxRecords=${loadNumber + amount}`)
  .then((response) => (setOldNews(response.data.records), setLoadingMore(false), setLoadNumber(amount)))
  .catch((error) => (setLoadError(error.response.data.error.message)))
  .finally(() => setLoadingMore(false))
}
useEffect(() => {
  getNews();
}, []);
  return ( 
    <StyledNewsPage>
      <section id="news">
        <h1>News</h1>
        {errorMessage ? <p style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>{errorMessage}</p> : 
        (loadingState ? <Loading /> : 
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
        )  
      }
        {oldNews ? 
        (loadingMore ? <Loading /> :
        <>
        <h1 style={{marginTop: '40px'}}> Old News</h1>
         {loadError ? <p style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>{loadError}</p> : 
        <div className="top-news news-grid">
          {oldNews?.map((item, index) => (
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
        </>
        ) 
        : ''}
         <Button label="Load more" className="btn" onClick={() => loadMore(6)}/>                       
      </section>
    </StyledNewsPage>
  );
};
export default NewsPage;
