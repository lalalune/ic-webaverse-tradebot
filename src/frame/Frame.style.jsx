import styled from "styled-components";


const StyledFrame = styled.div`

    align-self: flex-end;
    display: flex;
    background-image: url("frame/left-top-corner.png"),
        url("frame/right-top-corner.png"),
        url("frame/left-bottom-corner.png"),
        url("frame/right-bottom-corner.png"),
        url("frame/top-horizontal-bar.png"),
        url("frame/bottom-horizontal-bar.png"),
        url("frame/left-vertical-bar.png"),
        url("frame/right-vertical-bar.png"),
        url("frame/bg2.jpg");
    background-position: left top,
    right top,
    left 1px bottom,
        right 1px bottom, 
        left 1px, 
        left 1px bottom,
        left 1px bottom,
        right 1px top,
        center top;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x,
        repeat-x, repeat-y, repeat-y, no-repeat;
    background-color: #1d2123;
    position: relative;
    padding: 20px 10px 5px;
    .boxes-meta {
        position: absolute;
        top: 0;
        transform: translateY(-50%);
        .boxes-title {
            padding: 5px;
            color: #c1a78e;
            border: 1px solid #806448;
            border-radius: 2px;
            background-color: #301f19;
        }
    }
    .box-inner-container {
        width: 100%;
        padding: 10px;
        border-radius: 3px;
        box-shadow: inset 0px 1px 1px 2px #00000057;
        background: url("frame/bg.jpg") center center;
        background-size: cover;
    }


    `;

StyledFrame.displayName = "StyledFrame";

export default StyledFrame;
