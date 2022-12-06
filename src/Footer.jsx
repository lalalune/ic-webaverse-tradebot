// Footer React component
// takes a mode and status prop, as well as a curPage and setPage prop
// shows a centered footer banner using the assets/ICBanner.svg image
// shows STATUS on the right, with the status prop displayed
// shows pagination on the left, with the mode prop displayed

import ICBanner from "./assets/ICBanner.svg";

import React from "react";

import { tradePageBoxNum, pageBoxNum, inventoryBoxNum } from "./constants";

const Footer = ({ showPagination, mode, loading = false, curPage = 1, setCurPage }) => {
	const onPrevPage = () => {
		if (curPage <= 1) return
		setCurPage(curPage - 1)
	}

	const onNextPage = () => {
		const pageNum = Math.ceil(inventoryBoxNum / (mode === 'trade' ? tradePageBoxNum : pageBoxNum))
		if (curPage >= pageNum) return
		setCurPage(curPage + 1)
	}

	return (
		<div className="footer" style={{
			position: "absolute",
			width: "100%",
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
				<span style={{ color: "yellow" }}>{loading ? "LOADING..." : ""}</span>
			</div>
			{showPagination &&
				<div className="pagination" style={{
					position: "absolute",
					left: "1em",
					bottom: "1em",
				}}>
					<button
						disabled={curPage <= 1}
						style={{ opacity: curPage <= 1 ? 0.5 : 1 }}
						onClick={() => curPage >= 1 && onPrevPage()}
					>
						{"<"}
					</button>
					<span>{curPage}</span>
					<button
						onClick={() => onNextPage()}
					>
						{">"}
					</button>
				</div>
			}
		</div>
	);
}

export default Footer;