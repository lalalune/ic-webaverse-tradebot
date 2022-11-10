import styled from "styled-components";

const StyledTrade = styled.div`
  .boxes-grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
  }
`;

StyledTrade.displayName = "StyledTrade";

export default StyledTrade;
