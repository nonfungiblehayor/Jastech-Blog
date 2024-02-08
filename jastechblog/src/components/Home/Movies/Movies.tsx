import MovieTabs from "./movieTabs";
import styled from "styled-components";
import Trending from "./trending";
import { useRouter } from "next/router";
import Button from "@/components/Shared/button";
const StyledMovies = styled.section`
  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
  width: 85vw;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    .flex {
      display: flex;
      flex-direction: column;
    }
  }
`;
const Movies = () => {
  const router = useRouter()
  return (
    <StyledMovies>
      <section className="flex" id="movies">
        <MovieTabs />
      </section>
      <Button label="Load more" className="btn" onClick={() => router.push('/movies')} />
    </StyledMovies>
  );
};
export default Movies;
