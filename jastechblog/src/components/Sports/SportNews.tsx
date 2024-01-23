import { useRouter } from "next/router"
import Image from "next/image"
import StayConnected from "@/components/Home/Sport/stayConnected"
import { StyledEachNewsPage } from "@/pages/news/[id]"
import { api } from "@/pages/api"
import { useEffect, useState } from "react"
import Loading from "../Shared/loading"
const EachSportNews = () => {
    const sportId = process.env.NEXT_PUBLIC_SPORT_ID
    const router = useRouter()
    const [error, setError] = useState('')
    const [newsRecord, setRecord] = useState<{
      Headline: "",
        Summary: "",
        Type: "",
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
        Type: newsRecord?.Type,
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
    return ( <StyledEachNewsPage>
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
    )
}
export default EachSportNews