import React from "react";
import { useCssHandles } from "vtex.css-handles";
import styles from "./styles.css";

interface Props {
	increasePage: () => void;
	decreasePage: () => void;
	page: number;
	totalPages: number;
}

const CSS_HANDLES = [
	"pageSelectorWrapper",
	"pageSelectorContainer",
	"pageSelectorButtonPlus",
	"pageSelectorButtonMinus",
	"pageSelectorbuttonPlusDisabled",
	"pageSelectorbuttonMinusDisabled",
	"pageSelectorCurrentPage",
];

export const PageSelector = ({
	increasePage,
	decreasePage,
	page,
	totalPages,
}: Props) => {
	const handles = useCssHandles(CSS_HANDLES);
	return (
		<div
			className={`${handles.pageSelectorWrapper} ${styles.pageSelectorWrapper}`}
		>
			<div
				className={`${handles.pageSelectorContainer} ${styles.pageSelectorContainer}`}
			>
				<button
					className={
						page > 1
							? `${handles.pageSelectorButtonMinus} ${styles.pageSelectorButtonMinus}`
							: `${handles.pageSelectorbuttonMinusDisabled} ${styles.pageSelectorbuttonMinusDisabled}`
					}
					onClick={decreasePage}
				>
					-
				</button>
				<div
					className={`${handles.pageSelectorCurrentPage} ${styles.pageSelectorCurrentPage}`}
				>
					{page}/{totalPages}
				</div>
				<button
					className={
						page != totalPages
							? `${handles.pageSelectorButtonPlus} ${styles.pageSelectorButtonPlus}`
							: `${handles.pageSelectorbuttonPlusDisabled} ${styles.pageSelectorbuttonPlusDisabled}`
					}
					onClick={increasePage}
				>
					+
				</button>
			</div>
		</div>
	);
};
