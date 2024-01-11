import Image from "next/image";
import StyledMoviesTab from "@/styles/StyledMoviesTab";
import { movieTabs } from "@/components/Shared/tabs";
import { api } from "@/pages/api";
import { useEffect, useState } from "react";
const MovieTabs = () => {
  const movieId = process.env.NEXT_PUBLIC_MOVIES_ID;
  const [movies, setMovies] = useState<
    [
      {
        fields: {
          Name: "";
          Description: "";
          Type: "";
          Link: "";
          Image: [
            {
              url: "";
            },
          ];
        };
      },
    ]
  >();
  const getMovies = () => {
    api
      .get(`${movieId}?maxRecords=5`)
      .then((response) => setMovies(response.data.records))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getMovies(), [];
  });
  return (
    <StyledMoviesTab>
      <div>
        <div className="tabs">
          <h1>Movies</h1>
          <nav className="flex-row">
            {movieTabs.map((item, index) => (
              <p style={{ backgroundColor: item.color }} key={index}>
                {item.text}
              </p>
            ))}
          </nav>
        </div>
        <div className="top-movies flex-row">
          <div className="container">
            {movies?.map((item, index) => (
              <div key={index} className="each">
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
            ))}
          </div>
        </div>
      </div>
    </StyledMoviesTab>
  );
};
export default MovieTabs;
