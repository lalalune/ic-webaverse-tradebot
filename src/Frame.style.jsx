import styled from "styled-components";

const StyledFrame = styled.div`
  align-self: flex-end;
  display: flex;
  background-position: left top, right top, left 1px bottom, right 1px bottom,
    left 1px, left 1px bottom, left 1px bottom, right 1px top, center top;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x,
    repeat-x, repeat-y, repeat-y, no-repeat;
  background-color: #1d2123;
  position: relative;
  padding: 8px;
`;

StyledFrame.displayName = "StyledFrame";

export default StyledFrame;
