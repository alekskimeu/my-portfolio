import React from "react";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

import { Post } from "../";

import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
	return (
		<>
			<div className={styles.blogPosts}>
				<div className="container">
					<div className="section-header">
						<h1 className="heading">Latest posts</h1>
						<Link href="/">
							<a>
								View All<i className="fas fa-arrow-right-long"></i>
							</a>
						</Link>
					</div>
					<div className={styles.posts}>
						{posts.map((post) => {
							<Post key={post.id} post={post} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Posts;

export async function getStaticProps() {
	const posts = getSortedPostsData();
	return {
		props: {
			posts,
		},
	};
}