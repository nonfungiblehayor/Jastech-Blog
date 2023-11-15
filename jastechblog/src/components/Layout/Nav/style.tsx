import styled from "styled-components";

const StyledNav = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  .menu-btn {
    display: none;
  }
  .div {
    margin-bottom: 25px;
    width: 85vw;
    justify-content: space-between;
  }
  .purchase-link {
    background-color: #f65050;
    padding: 12px;
    font-weight: 700;
  }
  .links {
    background-color: #393939;
    height: 60px;
    width: 85vw;
  }
  @media (max-width: 768px) {
    header {
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin-top: -20px;
    }
    .logo {
      width: 146px;
      height: 32px;
    }
    .div {
      display: flex;
      flex-direction: row;
      padding-top: 25px;
      justify-content: space-between;
      align-self: center;
      div:nth-of-type(1) {
        display: none;
      }
    }
    .menu-btn {
      display: flex;
      margin-right: 10px;
    }
    .links {
      display: none;
      flex-direction: column;
      height: auto;
      gap: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      align-self: flex-end;
      width: 63vw;
      margin-top: -15px;
      z-index: 999;
      margin-bottom: -275px;
    }
  }
`;
export default StyledNav;
