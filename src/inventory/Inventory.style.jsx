import styled from "styled-components";

const StyledInventory = styled.div`
  .boxes-grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
  }
`;

StyledInventory.displayName = "StyledInventory";

export default StyledInventory;
