import styled, { css } from "styled-components";

const StyledBagItem = styled.div`
  ${(props) => {
    const { isDragging } = props;
    return css`
      width: 6em;
      height: 6em;
      border: 0 !important;
      opacity: ${isDragging ? 0 : 1};
      cursor: grab;
      img,
      video {
        max-width: 100%;
      }
    `;
  }}
`;

StyledBagItem.displayName = "StyledBagItem";

export default StyledBagItem;
