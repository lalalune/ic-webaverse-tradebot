import styled, { css } from "styled-components";

const StyledBagBox = styled.div`
  ${props => {
    const { canDrop, isOver } = props;

    return css`
      position: relative;
      border: ${canDrop
        ? `1px solid ${isOver ? "green" : "gold"}`
        : "1px solid #0c1e20"};
      position: relative;

      width: 65px;
      display: flex;
      height: 65px;
      align-items: center;
      justify-content: center;
      background-image: radial-gradient(#0c1e20 0%, #101010 66%);
      border-radius: 2px;
      box-shadow: 0px 0px 0px 2px #2f3639;
      .slot-type {
        color: gold;
        font-size: 11px;
        font-weight: bold;
      }
    `;
  }}
`;

StyledBagBox.displayName = "StyledBagBox";

export default StyledBagBox;
