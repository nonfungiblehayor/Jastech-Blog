import styled from "styled-components";
const StyledAdsPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
  p,
  h3 {
    font-size: 20px;
    color: #000;
    width: 85vw;
    font-weight: 500;
  }
  h3 {
    font-size: 30px;
    margin-top: 20px;
  }
  li {
    font-size: 15px;
    color: #000;
    font-weight: 500;
    margin-top: 20px;
  }
  form {
    width: 85vw;
    background-color: #393939;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    gap: 25px;
    margin-top: 30px;
  }
  .duration {
    margin-left: 25px;
  }
  .special {
    padding-top: 10px;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }
  .half-width {
    font-size: 14px;
    color: #000;
    background-color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    padding-left: 10px;
  }
  .single {
    align-self: center;
  }
  .full-width {
    width: 75vw;
    background-color: #fff;
    height: 150px;
    border-radius: 15px;
    color: #000;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 700;
    padding-top: 15px;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    align-items: flex-start;
    gap: 5px;
  }
  button {
    align-self: center;
    width: 400px;
    color: #000;
    background-color: #fff;
    padding: 15px;
    font-weight: 700;
    border: none;
    border-radius: 15px;
  }
  @media (max-width: 768px) {
    form {
      align-self: center;
    }
    button {
      width: 300px;
    }
    p {
      font-size: 18px;
    }
    li {
      width: 75vw;
    }
    .mobile {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .duration {
      margin-left: 0px;
    }
  }
`;
export default StyledAdsPage;
