import styled, { css } from "styled-components";

const StyledTooltip = styled.ul`
  ${(props) => {
    return css`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .react-tooltip {
        background-color: #0c1b1c;
        box-shadow: 0 0 2px 0px #806448;
      }
      .react-tooltip:after {
        background-image: url(frame/divider-bottom.png);
        content: "";
        position: absolute;
        left: 50%;
        bottom: -23px;
        background-repeat: no-repeat;
        z-index: 222;
        width: 88%;
        background-position: center;
        height: 30px;
        transform: translateX(-50%);
        margin: 0;
        border: 0 !important;
      }
      .react-tooltip:before {
        background-image: url(frame/divider-bottom.png);
        content: "";
        position: absolute;
        left: 50%;
        top: -22px;
        background-repeat: no-repeat;
        z-index: 222;
        width: 88%;
        background-position: center;
        height: 30px;
        transform: scale(-1) translateX(50%);
        border: 0 !important;
        margin: 0;
      }
    `;
  }}
`;

StyledTooltip.displayName = "StyledTooltip";

export default StyledTooltip;
