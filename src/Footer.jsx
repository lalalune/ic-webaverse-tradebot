// Footer React component
// takes a mode and status prop, as well as a curPage and setPage prop
// shows a centered footer banner using the assets/ICBanner.svg image
// shows STATUS on the right, with the status prop displayed
// shows pagination on the left, with the mode prop displayed

import ICBanner from "./assets/ICBanner.svg";

import React from "react";

const Footer = ({ showPagination, status="Unimpl", curPage=1, setCurPage }) => {
    return (
        <div className="footer" style={{
            position: "absolute",
            width: "100vw",
            margin: 0,
            bottom: "0",
        }}>
        <div className="banner" style={{
            // center
            position: "absolute",
            left: "50%",
            bottom: "1em",
            transform: "translate(-50%, 0)",
        }}>
            <img src={ICBanner} />
        </div>
        <div className="status" style={{
            position: "absolute",
            right: "1em",
            bottom: "1em",
        }}>
            <span style={{color:"yellow"}}>{status ? "LOADING" : ""}</span>
        </div>
        {showPagination &&
        <div className="pagination" style={{
            position: "absolute",
            left: "1em",
            bottom: "1em",
        }}>
            <button
            disabled={curPage <= 1}
            style={{opacity: curPage <= 1 ? 0.5 : 1}}
            onClick={() => setCurPage(curPage - 1)}
            >
            {"<"}
            </button>
            <span>{curPage}</span>
            <button
            onClick={() => setCurPage(curPage + 1)}
            >
            {">"}
            </button>
        </div>
        }
        </div>
    );
}

export default Footer;