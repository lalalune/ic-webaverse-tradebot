import styled from "styled-components";
import leftTopCorner from "./frame_assets/left-top-corner.png"
import rightTopCorner from "./frame_assets/right-top-corner.png"
import leftBottomCorner from "./frame_assets/left-bottom-corner.png"
import rightBottomCorner from "./frame_assets/right-bottom-corner.png"
import topHorizontalBar from "./frame_assets/top-horizontal-bar.png"
import bottomHorizontalBar from "./frame_assets/bottom-horizontal-bar.png"
import leftVerticalBar from "./frame_assets/left-vertical-bar.png"
import rightVerticalBar from "./frame_assets/right-vertical-bar.png"
import bg2 from "./frame_assets/bg2.jpg"
import bg from "./frame_assets/bg.jpg"
const StyledFrame = styled.div`

    align-self: flex-end;
    display: flex;
    background-image:
        url(${leftTopCorner}),
        url(${rightTopCorner}),
        url(${leftBottomCorner}),
        url(${rightBottomCorner}),
        url(${topHorizontalBar}),
        url(${bottomHorizontalBar}),
        url(${leftVerticalBar}),
        url(${rightVerticalBar}),
        url(${bg2});
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
        background: url(${bg}) center center;
        background-size: cover;
    }


    `;

StyledFrame.displayName = "StyledFrame";

export default StyledFrame;
