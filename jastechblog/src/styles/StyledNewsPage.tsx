import styled from "styled-components";

const StyledNewsPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
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
  h1 {
    width: 85vw;
    border-bottom: 1px solid #000;
    padding-bottom: 7px;
    font-size: 24px;
    color: #f65050;
    font-weight: 500;
  }
  span {
    color: #393939;
    font-size: 12px;
    font-weight: 500;
  }
  .top-news {
    width: 85vw;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .each-news {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 420px;
    height: auto;
    gap: 10px;
  }
  .frame {
    width: 420px;
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
  }
  .tag {
    background-color: #997c00;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    width: 97px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 15px;
    margin-left: 15px;
  }
  .thread {
    width: 370px;
    color: rgba(57, 57, 57, 0.6);
    font-size: 14px;
    font-weight: 400;
  }
  h2 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    width: 420px;
  }
  .other-news {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 85vw;
    margin-top: 30px;
  }
  .each-one {
    width: 450px;
    gap: 10px;
  }
  h3 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    width: 300px;
  }
  .news-tag {
    color: #000;
    font-size: 12px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    .top-news {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      padding-bottom: 5px;
    }
    .other-news {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-top: 1px solid #000;
      padding-top: 20px;
    }
    .frame {
      width: 85vw;
    }
    .thread {
      display: none;
    }
    h2 {
      font-size: 16px;
      width: 75vw;
      align-self: flex-start;
    }
    span {
      align-self: flex-start;
    }
    .each-one {
      width: 85vw;
      gap: 5px;
      border-bottom: 1px solid #000;
      padding-bottom: 5px;
    }
    .each-news {
      align-items: center;
      width: 85vw;
      gap: 7px;
    }
    .each-img {
      width: 100px;
      height: 80px;
    }
    h3 {
      font-size: 12px;
      width: 200px;
    }
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
  }
`;
export default StyledNewsPage;