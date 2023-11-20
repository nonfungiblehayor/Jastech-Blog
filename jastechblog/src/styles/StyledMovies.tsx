import styled from "styled-components";

const StyledMovies = styled.div`
  width: 85vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  h1 {
    color: #f65050;
    font-size: 30px;
    font-weight: 700;
    border-bottom: 1px solid #000;
    padding-bottom: 8px;
    width: 85vw;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .action-movies {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-around;
    gap: 10px;
  }
  .each {
    width: 183px;
    height: 281px;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
  p {
    font-size: 12px;
    font-weight: 700;
    color: #000;
    margin-left: 10px;
    margin-top: 8px;
  }
  .btn {
    width: 83vw;
    border-radius: 8px;
    height: 46px;
    text-align: center;
    background-color: #f65050;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    align-self: center;
    margin: auto;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    .action-movies {
      grid-template-columns: auto auto;
    }
    .each {
      width: 47vw;
    }
    .movie-img {
      width: 46.5vw;
    }
    h1 {
      text-align: center;
    }
  }
`;
export default StyledMovies;
