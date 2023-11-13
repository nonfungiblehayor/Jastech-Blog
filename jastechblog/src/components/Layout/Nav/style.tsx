import styled from "styled-components";

const StyledNav = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
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
  nav {
    background-color: #393939;
    height: 60px;
    width: 85vw;
  }
`;
export default StyledNav;
