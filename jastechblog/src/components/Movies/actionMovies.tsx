import Image from "next/image"
import Link from "next/link"
import StyledMovies from "@/styles/StyledMovies"
const ActionMovies = () => {
    const ActionMovies = [
        {
            title: 'Strong Girl Nam-soon S01 (Episode 14)',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
        {
            title: 'Fast & furious 2',
            image: '/img/movie.png',
            link: 'https://nkiri.com/fast-and-furious-collection-1-6-download-hollywood-movie/'
        },
    ]
    return ( <StyledMovies>
        <div>
            <h1>Action Movies</h1>
            <div className="action-movies">
                {ActionMovies.map((item, index) => (
                    <Link href={item.link} key={index}>
                    <div className="each">
                        <Image src={item.image} className="movie-img" alt="movie image" width={182} height={231} />
                        <p>{item.title}</p>
                    </div>
                    </Link>
                ))}
            </div>
            <nav  className="btn flex-row">
                <Link href=''>
                    Load More
                </Link>
            </nav>
        </div>
        </StyledMovies>
    )
}
export default ActionMovies