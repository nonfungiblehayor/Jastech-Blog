import { sportTabs } from "../Shared/tabs";
import Link from "next/link";
import Loading from "../Shared/loading";
import StyledNewsPage from "@/styles/StyledNewsPage";
import { useState, useEffect } from "react";
import { api } from "@/pages/api";
import Button from "../Shared/button";
const SportPage = () => {
  const sportId = process.env.NEXT_PUBLIC_SPORT_ID
  const [topNews, setTopNews] = useState<
  [
    {
      id: "";
      fields: {
        Headline: "";
        Date: "";
        Type: "";
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
      Type: "";
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
const [tabs, setActiveTab] = useState<string>('')
const getNews = () => {
  setLoading(true)
  api
    .get(`${sportId}?&filterByFormula=AND(%7BBreaking%7D+%3D+'Yes')&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=6`)
    .then((response) => (setTopNews(response.data.records), setLoading(false)))
    .catch((error) => (setErrorMessage(error.response.data.error.message)))
    .finally(() => setLoading(false))
};
const loadMore = (amount: number) => {
  setLoadingMore(true)
  api.get(`${sportId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BBreaking%7D+%3D+'No')&maxRecords=${loadNumber + amount}`)
  .then((response) => (setOldNews(response.data.records), setLoadingMore(false), setLoadNumber(amount)))
  .catch((error) => (setLoadError(error.response.data.error.message)))
  .finally(() => setLoadingMore(false))
}
const loadCategory = (amount: number, type: string) => {
  setLoadingMore(true)
  api.get(`${sportId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BType%7D+%3D+'${type}'%2C%7BBreaking%7D+%3D+'No')&maxRecords=${loadNumber + amount}`)
  .then((response) => (
    response.data.records.length > 0 ? 
    (setOldNews(response.data.records),
    setLoadNumber(amount)) :
    setErrorMessage(
      `ooops!!!! we do not have any latest ${type} news at this time check back later`,
    )
  ))
  .catch((error) => (
    setErrorMessage(error.response.data.error.message)
  ))
  .finally(() => setLoadingMore(false))
}
const getSportCategory = (type: string) => {
  setLoading(true);
  api
    .get(
      `${sportId}?filterByFormula=AND(%7BType%7D+%3D+'${type}'%2C%7BBreaking%7D+%3D+'Yes')&maxRecords=6`,
    )
    .then(
      (response) => (
          response.data.records.length > 0 ? 
          (setTopNews(response.data.records),
          setActiveTab(type)) :
          setErrorMessage(
            `ooops!!!! we do not have any latest ${type} news at this time check back later`,
          )          
          )
    )
    .catch(
      (error) => (
        setErrorMessage(error.response.data.error.message),
        setLoading(false)
      ),
    )
    .finally(() => setLoading(false))
};

useEffect(() => {
  getNews();
}, []);
  return (
    <StyledNewsPage>
      <section>
        <div className="tabs">
          <h1 style={{ borderBottom: "none" }}>Sport</h1>
          <nav className="flex-row">
            {sportTabs.map((item, index) => (
              <p key={index} style={{ backgroundColor: item.color }} onClick={() => getSportCategory(item.text)}>
                {item.text}
              </p>
            ))}
          </nav>
        </div>
        {errorMessage ? <p style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>{errorMessage}</p> : 
          (loadingState ? <Loading /> : 
          <div className="top-news news-grid">
            {topNews?.map((item, index) => (
              <Link href={`/news/${item.id}`}>
              <div className="each-news each-grid" key={index}>
                <div
                  className="frame"
                  style={{ backgroundImage: `url(${item.fields.Image[0].url})` }}
                >
                  <p className="tag">{item.fields.Type}</p>
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
            <Link href={`/news/${item.id}`} key={index}>
            <div className="each-news each-grid" >
              <div
                className="frame"
                style={{ backgroundImage: `url(${item.fields.Image[0].url})` }}
              >
                <p className="tag">{item.fields.Type}</p>
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
         <Button label="Load more" className="btn" onClick={() => tabs !== '' ? loadCategory(6,tabs): loadMore(6)}/>   
      </section>
    </StyledNewsPage>
  );
};
export default SportPage;
