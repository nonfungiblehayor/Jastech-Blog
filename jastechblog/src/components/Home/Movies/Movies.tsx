import MovieTabs from "./movieTabs";
import styled from "styled-components";
import Trending from "./trending";

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
  return (
    <StyledMovies>
      <section className="flex">
        <MovieTabs />
      </section>
    </StyledMovies>
  );
};
export default Movies;
