import React, { useEffect, useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import { Post } from "../Post";
import { Search } from "../Search";
import styles from "./styles.css";
import { PageSelector } from "../PageSelector";

interface Props {
	url: string;
	itemsPerPage?: number;
}

type Post = {
	title: string;
	body: string;
	id: number;
};

const CSS_HANDLES = [
	"postsWrapper",
	"postsContainer",
	"postSearchInput",
	"postSearchButton",
];

export const Posts = ({ url, itemsPerPage = 6 }: Props) => {
	const handles = useCssHandles(CSS_HANDLES);
	const [posts, setPosts] = useState<Post[]>([] as Post[]);
	const [filter, setFilter] = useState("");
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([] as Post[]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	function increasePage() {
		if (page < Math.ceil(filteredPosts.length / itemsPerPage)) {
			setPage(page + 1);
		}
	}
	function decreasePage() {
		if (page > 1) setPage(page - 1);
	}

	function search() {
		setIsLoading(true);
		setPage(1);
		fetch(url)
			.then((response) => response.json())
			.then((json) => setPosts(json));

		setFilteredPosts(
			posts.filter((post) =>
				post.title.toLowerCase().includes(filter.toLowerCase())
			)
		);
		setIsLoading(false);
	}

	function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setFilter(value);
	}
	console.log(filteredPosts);

	useEffect(() => {
		search();
	}, []);

	return (
		<div className={`${handles.postsWrapper}`}>
			<Search handleFilter={handleFilter} search={search} />
			{filteredPosts.length > 0 ? (
				<div>Resultados: {filteredPosts.length}</div>
			) : null}

			<div className={`${handles.postsContainer} ${styles.postsContainer}`}>
				{isLoading ? <div>Loading...</div> : null}
				{filteredPosts
					.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
					.map((post) => (
						<Post key={post.id} {...post} />
					))}
			</div>
			{filteredPosts.length > 0 ? (
				<PageSelector
					page={page}
					increasePage={increasePage}
					decreasePage={decreasePage}
					totalPages={Math.ceil(filteredPosts.length / itemsPerPage)}
				/>
			) : null}
		</div>
	);
};
