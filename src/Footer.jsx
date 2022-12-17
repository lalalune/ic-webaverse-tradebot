// Footer React component
// takes a mode and status prop, as well as a curPage and setPage prop
// shows a centered footer banner using the assets/ICBanner.svg image
// shows STATUS on the right, with the status prop displayed
// shows pagination on the left, with the mode prop displayed

import React from "react"

import ICBanner from "./assets/ICBanner.svg"

import { tradePageBoxNum, pageBoxNum, inventoryBoxNum } from "./constants"

const Footer = ({ showPagination, mode, loading = false, curPage = 1, setCurPage }) => {
	const pageNum = Math.ceil(inventoryBoxNum / (mode === 'trade' ? tradePageBoxNum : pageBoxNum))

	const onPrevPage = () => {
		if (curPage <= 1) return
		setCurPage(curPage - 1)
	}

	const onNextPage = () => {
		if (curPage >= pageNum) return
		setCurPage(curPage + 1)
	}

	return (
		<div style={{
			position: "absolute",
			width: "100%",
			bottom: 0,
		}}>
			<div style={{
				position: "absolute",
				left: "50%",
				bottom: "1em",
				transform: "translate(-50%, 0)",
			}}>
				<img src={ICBanner} />
			</div>
			<div style={{
				position: "absolute",
				right: ".5em",
				bottom: ".5em",
			}}>
				<span style={{
					color: "yellow",
					zIndex: 1,
				}}>{loading ? "Loading..." : ""}</span>
			</div>
			{showPagination &&
				<div style={{
					position: "absolute",
					left: ".5em",
					bottom: ".5em",
				}}>
					<button
						style={{
							opacity: curPage <= 1 ? 0.5 : 1
						}}
						onClick={() => onPrevPage()}
					>
						{"<"}
					</button>
					<span>{curPage}</span>
					<button
						style={{
							opacity: curPage >= pageNum ? 0.5 : 1
						}}
						onClick={() => onNextPage()}
					>
						{">"}
					</button>
				</div>
			}
		</div>
	)
}

export default Footer
