import Link from "next/link";
import Image from "next/image";
import StyledMovies from "@/styles/StyledMovies";
const Scifi = () => {
  const scifiMovies = [
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
    {
      title: "The return of Avengers",
      image: "/img/movie.png",
      link: "https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/",
    },
  ];
  return (
    <StyledMovies>
      <div>
        <h1>Sci-fi</h1>
        <div className="action-movies">
          {scifiMovies.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="each">
                <Image
                  src={item.image}
                  className="movie-img"
                  alt="movie image"
                  width={182}
                  height={231}
                />
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <nav className="btn flex-row">
          <Link href="">Load More</Link>
        </nav>
      </div>
    </StyledMovies>
  );
};
export default Scifi;
