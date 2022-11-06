import styled, { css } from "styled-components";

const StyledBagItem = styled.div`
  ${props => {
    const { isDragging } = props;
    return css`
      width: 60px;
      height: 60px;
      border: 0 !important;
      opacity: ${isDragging ? 0 : 1};
      /* height: ${isDragging ? 0 : ""}; */
      cursor: grab;
      .react-tooltip {
        padding: 0;
        ul {
          list-style-type: none;
        }
        &:after {
    background: url("frame/divider-bottom.png") no-repeat;
          content: '';
          position: absolute;
          top:0;
          left:0%;

      }  
      }
      img {
        max-width: 100%;
        /* max-height: 65px; */
      }
    `;
  }}
`;

StyledBagItem.displayName = "StyledBagItem";

export default StyledBagItem;
