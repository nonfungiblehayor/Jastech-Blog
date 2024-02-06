import Image from "next/image";
import StyledMoviesTab from "@/styles/StyledMoviesTab";
import { movieTabs } from "@/components/Shared/tabs";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
import Loading from "@/components/Shared/loading";
import Link from "next/link";
const MovieTabs = () => {
  const movieId = process.env.NEXT_PUBLIC_MOVIES_ID;
  const [movies, setMovies] = useState<
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
  const [errorMsg, setErrorMsg] = useState("");
  const [movieExist, setExist] = useState<boolean>(true);
  const [loadingState, setLoading] = useState<boolean>(false);
  const getMovieCategory = (type: string) => {
    setLoading(true);
    api
      .get(
        `${movieId}?filterByFormula=AND(%7BType%7D+%3D+'${type}'%2C%7BLatest%7D+%3D+'Yes')&maxRecords=5`,
      )
      .then((response) =>
        response.data.records.length > 0
          ? (setMovies(response.data.records),
            setExist(true),
            setLoading(false))
          : (setExist(false),
            setLoading(false),
            setErrorMsg(
              `ooops!!!! our ${type} catalogue is empty check back later`,
            )),
      )
      .catch(
        (error) => (
          setErrorMsg(error.response.data.error.type),
          setExist(false),
          setLoading(false)
        ),
      );
  };
  const getMovies = () => {
    api
      .get(
        `${movieId}?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&filterByFormula=AND(%7BLatest%7D+%3D+'Yes')&maxRecords=5`,
      )
      .then((response) => setMovies(response.data.records))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <StyledMoviesTab>
      <div>
        <div className="tabs">
          <h1 onClick={() => console.log(movies)}>Movies</h1>
          <nav className="flex-row">
            {movieTabs.map((item, index) => (
              <p
                style={{ backgroundColor: item.color }}
                key={index}
                onClick={() => getMovieCategory(item.text)}
              >
                {item.text}
              </p>
            ))}
          </nav>
        </div>
        <div className="top-movies flex-row" style={{ color: "red" }}>
          {loadingState ? (
            <Loading />
          ) : movieExist ? (
            <div className="container">
              {movies?.map((item, index) => (
                <Link href={`movie/${item.id}`} key={index}>
                  <div className="each">
                    <Image
                      src={item.fields.Image[0].url}
                      alt="bg"
                      width={192}
                      height={288}
                      className="img"
                    />
                    <h2>
                      <span>{item.fields.Type}</span>
                      {item.fields.Name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
      </div>
    </StyledMoviesTab>
  );
};
export default MovieTabs;
