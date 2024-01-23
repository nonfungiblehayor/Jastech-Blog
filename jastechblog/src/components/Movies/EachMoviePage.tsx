import YoutubeEmbed from "../Shared/EmbedWebsite"
import StayConnected from "../Home/Sport/stayConnected"
import { StyledEachNewsPage } from "@/pages/news/[id]"
import { useEffect, useState } from "react"
import Loading from "../Shared/loading"
import { useRouter } from "next/router"
import Link from "next/link"
import { api } from "@/pages/api"
const EachMoviePage = () => {
    const movieId = process.env.NEXT_PUBLIC_MOVIES_ID
    const router = useRouter()
    const [error, setError] = useState('')
    const [movieRecord, setRecord] = useState<{
        Name: "",
        Description: "",
        Type: "",
        Latest: [],
        Youtube: "",
        link: ""
    }>()
    const getMoviesDetail = () => {
        api.get(`${movieId}/${router.query.id}`)
        .then((response) => (
            setRecord(response.data.fields),
            console.log(response)
        ))
        .catch((error) => (
            setError(error.response.data.error)
        ))
    }
    const movieDetail = [
        {
            Name: movieRecord?.Name,
            Description: movieRecord?.Description,
            Latest: movieRecord?.Latest,
            youtube: movieRecord?.Youtube,
            link: movieRecord?.link
        }
    ]
    useEffect(() => {
        if(router.isReady) {
            getMoviesDetail()
        }
    }, [router.isReady])
    return ( <StyledEachNewsPage>
        <section className="each-section">
            {movieDetail.map((item, index) => (
                 <div className="first-div" key={index}>
                    <YoutubeEmbed url={`https://www.youtube.com/embed/${item.youtube}`} />
                    <div className="ads-pop">Ads</div>
                    <h1>{item.Name} </h1>
                    <p>{item.Description}</p>
                    <div className="ads-pop">Ads</div>
                    <Link href={`${item.link}`}>
                        <p className="download">Download Link</p>
                    </Link>
             </div>
            ))}
            <StayConnected showAds />
        </section>
        </StyledEachNewsPage>
    )
}
export default EachMoviePage