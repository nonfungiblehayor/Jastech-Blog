import Image from "next/image";
import styled from "styled-components";
import StayConnected from "@/components/Home/Sport/stayConnected";
import Ads from "@/components/Home/Ads/ads";
import { api } from "../api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/Shared/loading";

export const StyledEachNewsPage = styled.section`
  .each-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  color: #393939;
  .first-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    gap: 20px;
    height: auto;
    border-right: 1px solid #393939;
    margin-right: 15px;
    padding-bottom: 40px;
  }
  .download {
    margin: auto;
    align-self: center;
    background-color: #24db24;
    border-radius: 10px;
    color: #393939;
    cursor: pointer;
    width: 150px;
    text-align: center;
    padding: 15px;
  }
  .error-div {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 25px;
    p {
      font-size: 30px;
    }
  }
  h1 {
    align-self: center;
    width: 500px;
    align-self: flex-start;
  }
  .type_date {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    gap: 6px;
  }
  .tag {
    background-color: #0088ff;
    width: 120px;
    text-align: center;
    padding: 2px;
    color: #fff;
  }
  .cover-img {
    align-self: center;
  }
  .ads-pop {
    width: 300px;
    align-self: center;
    height: 300px;
    background-image: url("/img/bg1.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-top: 25px;
  }
  .details {
    line-height: 20px;
    width: 58vw;
  }
  @media (max-width: 768px) {
    div:nth-of-type(2) {
      display: none;
    }
    .cover-img {
      width: 300px;
    }
    .first-div {
      border-right: none;
      width: 85vw;
    }
    .details {
      width: 80vw;
    }
    h1 {
      width: 80vw;
      font-size: 20px;
    }
  }
`;
const EachNewsPage = () => {
  const sportId = process.env.NEXT_PUBLIC_NEWS_ID
    const router = useRouter()
    const [error, setError] = useState('')
    const [newsRecord, setRecord] = useState<{
      Headline: "",
        Summary: "",
        NewsType: "",
        Date: "",
        more: "",
        Image: [
          {
            url: ''
          }
        ]
    }    
    >()
    const newsDetails = [
      {
        Headline: newsRecord?.Headline,
        Summary: newsRecord?.Summary,
        Type: newsRecord?.NewsType,
        Date: newsRecord?.Date,
        More: newsRecord?.more,
        Image: [
          {
            url: newsRecord?.Image[0].url
          }
        ]
      }
    ]
    const getNewsDetail = () => {
        api.get(`${sportId}/${router.query.id}`)
        .then((response) => (
            setRecord(response.data.fields)
        ))
        .catch((error) => (
            setError(error.response.data.error)
        ))
    }
    useEffect(() => {
        if(router.isReady) {
            getNewsDetail()
        }
    }, [router.isReady])
  return (
    <StyledEachNewsPage>
      <section className="each-section">
      {error === '' ? 
            (newsDetails?.map((item, index) => (
                <div className="first-div" key={index}>
                <h1>
                    {item.Headline}
                </h1>
                <p className="type_date">{item.Date}</p>
                <Image
                    src={item.Image[0].url || '/img/spinner.gif'} 
                    alt="news img"
                    width={485}
                    height={300}
                    className="cover-img"
                />
                <p className="tag">{item.Type}</p>
                <h2>
                        {item.Headline}
                </h2>
                <div className="ads-pop">Ads</div>
                <p className="details">
                    {item.Summary}
                </p>
                {item.More ? 
                <>
                <div className="ads-pop">Ads</div>
                <p className="details">
                  {item.More}
                  </p>
                </>
                : ''
                }
                </div>
            )))
            : <div className="error-div">
                <Loading />
                <p>{error} check back later</p>
            </div> }
        <StayConnected showAds />
      </section>
    </StyledEachNewsPage>
  );
};
export default EachNewsPage;
