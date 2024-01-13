import Image from "next/image";
import StyledMoviesTab from "@/styles/StyledMoviesTab";
import { sportTabs } from "@/components/Shared/tabs";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
import Loading from "@/components/Shared/loading";
import Link from "next/link";
const SportTab = () => {
  const sportId = process.env.NEXT_PUBLIC_SPORT_ID
  const [sportNews, setSportNews] = useState<
    [
      {
      id: '',
      fields: {
        Headline: "",
        Summary: "",
        Type: "",
        Date: "",
        Image: [
          {
            url: ''
          }
        ]
      }
    }
    ]
  >()
  const [errorMsg, setErrorMsg] = useState("");
  const [sportExist, setExist] = useState<boolean>(true);
  const [loadingState, setLoading] = useState<boolean>(false);
  const getSportNews = () => {
    api.get(`${sportId}?filterByFormula=AND(%7BBreaking%7D+%3D+'Yes')&maxRecords=6`)
    .then((response) => (
      (setSportNews(response.data.records), console.log(response))
    ))
    .catch((error) => (
      setErrorMsg(error.response.data.error.type)
    ))
  }
  const getSportCategory = (type: string) => {
    setLoading(true);
    api.get(`${sportId}?filterByFormula=AND(%7BType%7D+%3D+'${type}'%2C%7BBreaking%7D+%3D+'Yes')&maxRecords=6`)
    .then((response) => (
      response.data.records.length > 0 ?
      (setSportNews(response.data.records),
      setLoading(false),
      setExist(true))
      : 
      setExist(false),
      setLoading(false),
      setErrorMsg(
        `ooops!!!! we do not have any latest ${type} news at this time check back later`,
      )
    ))
    .catch((error) => (
      setErrorMsg(error.response.data.error.type),
      setExist(false),
      setLoading(false)
    ))
  }
  useEffect(() => {
    getSportNews()
  }, [])
  return (
    <StyledMoviesTab>
      <div>
        <div className="tabs">
          <h1>Sport</h1>
          <nav className="flex-row">
            {sportTabs.map((item, index) => (
              <p style={{ backgroundColor: item.color }} key={index} onClick={() => getSportCategory(item.text)}>
                {item.text}
              </p>
            ))}
          </nav>
        </div>
        <div className="top-movies flex-row">
         {loadingState ? <Loading /> : 
          (sportExist ? 
              <div className="sport-container">
                {sportNews?.map((item, index) => (
                  <Link href={`sports/${item.id}`}>
                      <div key={index} className="each-sport">
                        <p className="sport-type">{item.fields.Type}</p>
                        <Image
                          src={item.fields.Image[0].url}
                          alt="bg"
                          width={400}
                          height={270}
                          className="sport-img"
                        />
                        <h2>
                          <span>{item.fields.Date}</span>
                          {item.fields.Headline}
                        </h2>
                      </div>
                  </Link>
                ))}
              </div> 
          : 
           <p style={{color: 'red'}}>{errorMsg}</p>
          )
          }
        </div>
      </div>
    </StyledMoviesTab>
  );
};
export default SportTab;
