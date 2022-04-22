import React from "react";
import { useCssHandles } from "vtex.css-handles";
import styles from "./styles.css";

interface Props {
	handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
	search: () => void;
}
const CSS_HANDLES = [
	"postSearchWrapper",
	"postSearchContainer",
	"postSearchInput",
	"postSearchButton",
];

export function Search({ handleFilter, search }: Props) {
	const handles = useCssHandles(CSS_HANDLES);

	return (
		<div className={`${handles.postSearchWrapper} ${styles.postSearchWrapper}`}>
			<form
				className={`${handles.postSearchContainer} ${styles.postSearchContainer}`}
				onSubmit={(e) => {
					e.preventDefault();
					search();
				}}
			>
				<input
					type="text"
					onChange={handleFilter}
					className={`${handles.postSearchInput} ${styles.postSearchInput}`}
					inputMode="search"
				/>
				<button
					onClick={search}
					className={`${handles.postSearchButton} ${styles.postSearchButton}`}
					type="submit"
				>
					Buscar
				</button>
			</form>
		</div>
	);
}
