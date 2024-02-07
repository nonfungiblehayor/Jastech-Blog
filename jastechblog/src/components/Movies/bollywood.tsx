import Image from "next/image";
import Link from "next/link";
import StyledMovies from "@/styles/StyledMovies";
import { useState, useEffect } from "react";
import Loading from "../Shared/loading";
import { api } from "@/pages/api";
import Button from "../Shared/button";

const Bollywood = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loadingState, setLoading] = useState<boolean>(false);
  const movieId = process.env.NEXT_PUBLIC_MOVIES_ID;
  const [loadingMore, setLoadingMore] = useState(false) 
const [loadNumber, setLoadNumber] = useState<number>(0)   
const [loadError, setLoadError] = useState<string>() 
const [tabs, setActiveTab] = useState<string>('')
  const [oldMovies, setOldMovies] = useState<
  [
    {
      id: "";
      fields: {
        Name: "";
        Description: "";
        Type: "";
        Link: "";
        Youtube: "";
        Image: [
          {
            url: "";
          },
        ];
      };
    },
  ]
>();
  const [BollywoodMovies, setBollywoodMovies] = useState<
    [
      {
        id: "";
        fields: {
          Name: "";
          Description: "";
          Type: "";
          Link: "";
          Youtube: "";
          Image: [
            {
              url: "";
            },
          ];
        };
      },
    ]
  >();
  const getMovieCategory = () => {
    setLoading(true);
    api
      .get(
        `${movieId}?filterByFormula=AND(%7BType%7D+%3D+'Bollywood'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5`,
      )
      .then((response) =>
        response.data.records.length > 0
          ? (setBollywoodMovies(response.data.records),
            setLoading(false))
          : (setLoading(false),
            setErrorMsg(
              `ooops!!!! our Bollywood catalogue is empty check back later`,
            )),
      )
      .catch(
        (error) => (
          setErrorMsg(error.response.data.error.message),
          setLoading(false)
        ),
      )
      .finally(() => setLoading(false))
  };
  const loadMore = (amount: number) => {
    setLoadingMore(true)
    api.get(`${movieId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BTYpe%7D+%3D+'Bollywood'%2C%7BLatest%7D+%3D+'No')&maxRecords=${loadNumber + amount}`)
    .then((response) => (setOldMovies(response.data.records), setLoadingMore(false), setLoadNumber(amount)))
    .catch((error) => (setLoadError(error.response.data.error.message)))
    .finally(() => setLoadingMore(false))
  }
  useEffect(() => {
    getMovieCategory();
  }, []);
  return (
    <StyledMovies>
      <div>
        <h1>Bollywood</h1>
        {loadingState ? <Loading /> : (errorMsg !== '' ? <p style={{textAlign: 'center'}}>{errorMsg}</p> :  
        <div className="action-movies">
          {BollywoodMovies?.map((item, index) => (
            <Link href={`/movie/${item.id}`} key={index}>
              <div className="each">
                <Image
                  src={item.fields.Image[0].url}
                  className="movie-img"
                  alt="movie image"
                  width={182}
                  height={231}
                />
                <p>{item.fields.Name}</p>
              </div>
            </Link>
          ))}
        </div>
        )
        }
         {oldMovies ? 
        (loadingMore ? <Loading /> :
        <>
        <h1 style={{marginTop: '40px'}}> Old News</h1>
         {loadError ? <p style={{color: 'red', textAlign: 'center', marginTop: '25px'}}>{loadError}</p> : 
        <div className="top-news news-grid">
          {oldMovies?.map((item, index) => (
             <Link href={`/movie/${item.id}`} key={index}>
             <div className="each">
               <Image
                 src={item.fields.Image[0].url}
                 className="movie-img"
                 alt="movie image"
                 width={182}
                 height={231}
               />
               <p>{item.fields.Name}</p>
             </div>
           </Link>           
          ))}
        </div>
        }
        </>
        ) 
        : ''}
         <Button label="Load more" className="btn" onClick={() => loadMore(6)}/>  
      </div>
    </StyledMovies>
  );  
};
export default Bollywood;
