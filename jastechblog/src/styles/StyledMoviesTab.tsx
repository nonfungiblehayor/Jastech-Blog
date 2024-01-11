import styled from "styled-components";

const StyledMoviesTab = styled.div`
  display: flex;
  flex-direction: column;
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85vw;
    align-items: center;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    margin-bottom: 25px;
    p {
      font-size: 12px;
      font-weight: 400;
      padding: 10px 15px;
      margin-right: 10px;
    }
  }
  h1 {
    color: #f65050;
    font-size: 24px;
    font-weight: 500;
  }
  .stand-alone {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 400px;
    span,
    p {
      font-size: 10px;
      font-weight: 400;
      color: #393939a4;
      margin-top: 15px;
    }
    p {
      font-size: 14px;
      width: 370px;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    width: 380px;
    color: #000;
    margin-top: 15px;
  }
  .container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: flex-start;
    justify-content: space-around;
    gap: 25px;
  }
  .sport-container {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    width: 85vw;
    gap: 20px;
  }
  .each-sport {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26vw;
    height: auto;
    padding: 10px 10px 20px 10px;
    h2 {
      display: flex;
      flex-direction: column;
      gap: 5px;
      span {
        font-weight: 400;
      }
    }
    .sport-type {
      background-color: #a56cbd;
      padding: 5px 10px;
      width: 100px;
      text-align: center;
      margin-bottom: -30px;
      z-index: 999;
    }
  }
  .each {
    width: 192px;
    margin-top: 15px;
    h2 {
      font-size: 15px;
      font-weight: 400;
      width: 170px;
      display: flex;
      flex-direction: column;
      color: #000;
      span {
        font-size: 10px;
        font-weight: 400;
        color: #393939;
      }
    }
  }
  @media (max-width: 1450px) and (min-width: 1200px) {
    .sport-container {
      gap: 10px;
    }
    .each-sport {
      width: 300px;
      h2 {
        width: 280px;
      }
    }
    .sport-img {
      width: 300px;
    }
  }
  @media (max-width: 768px) {
    .tabs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      width: 85vw;
      overflow-x: scroll;
      margin-bottom: 15px;
      p {
        width: 80px;
        text-align: center;
      }
    }
    .top-movies {
      display: flex;
      flex-direction: column;
    }
    .img-frame {
      width: 80vw;
    }
    .stand-alone {
      width: 85vw;
      align-items: flex-start;
      span,
      p {
        width: 80vw;
      }
    }
    h2 {
      width: 80vw;
    }
    .container {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      gap: 15px;
    }
    .sport-container {
      display: flex;
      flex-direction: column;
    }
    .sport-img {
      width: 80vw;
    }
    .each {
      width: 45vw;
      gap: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      h2 {
        margin-top: 5px;
        font-size: 12px;
      }
    }
    .img {
      width: 45vw;
    }
  }
`;
export default StyledMoviesTab;
