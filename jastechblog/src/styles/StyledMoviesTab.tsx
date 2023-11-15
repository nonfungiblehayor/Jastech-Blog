import styled from "styled-components";

const StyledMoviesTab = styled.div`
  display: flex;
  flex-direction: column;
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 920px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .each {
    width: 380px;
    margin-top: 15px;
    h2 {
      font-size: 15px;
      font-weight: 400;
      width: 250px;
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
      align-items: center;
      gap: 10px;
    }
    .each {
      width: 85vw;
      gap: 10px;
      justify-content: flex-start;
      h2 {
        margin-top: -5px;
      }
    }
  }
`;
export default StyledMoviesTab;
