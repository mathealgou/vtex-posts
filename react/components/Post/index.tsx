import React from "react";
import { useCssHandles } from "vtex.css-handles";
import styles from "./styles.css";

const CSS_HANDLES = ["postContainer", "postTitle", "postBody"];

interface Post {
	title: string;
	body: string;
	id: number;
}

export const Post = (post: Post) => {
	const handles = useCssHandles(CSS_HANDLES);
	return (
		<div className={`${handles.postContainer} ${styles.postContainer}`}>
			<h1 className={`${handles.postTitle} ${styles.postTitle}`}>
				{post.title}
			</h1>
			<p className={`${handles.postBody}  ${styles.postBody}`}>{post.body}</p>
		</div>
	);
};
