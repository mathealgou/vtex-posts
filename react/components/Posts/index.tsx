import React, { useEffect, useState } from "react";
import { useCssHandles } from "vtex.css-handles";
import { Post } from "../Post";
import { Search } from "../Search";
import styles from "./styles.css";

interface Props {
	url: string;
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

export const Posts = ({ url }: Props) => {
	const handles = useCssHandles(CSS_HANDLES);
	const [posts, setPosts] = useState<Post[]>([] as Post[]);
	const [filter, setFilter] = useState("");
	const [filteredPosts, setFilteredPosts] = useState<Post[]>([] as Post[]);
	const [isLoading, setIsLoading] = useState(false);

	function search() {
		setIsLoading(true);
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
			<div className={`${handles.postsContainer} ${styles.postsContainer}`}>
				<Search handleFilter={handleFilter} search={search} />
				{isLoading ? <div>Loading...</div> : null}
				{filteredPosts.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</div>
		</div>
	);
};
