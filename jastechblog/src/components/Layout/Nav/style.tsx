import styled from "styled-components";

const StyledNav = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  div {
    margin-bottom: 25px;
    width: 85vw;
    justify-content: space-between;
  }
  .ads {
    margin-bottom: 0px;
    background-image: url("/img/adsBg.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 771px;
    height: 90px;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    p:nth-of-type(1) {
      font-size: 14px;
      font-weight: 400;
      span {
        color: #f65050;
      }
    }
  }
  .purchase-link {
    background-color: #f65050;
    padding: 12px;
    font-weight: 700;
  }
  nav {
    background-color: #393939;
    height: 60px;
    width: 85vw;
  }
`;
export default StyledNav;
