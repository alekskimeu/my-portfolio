import React from "react";
import Post from "../Post/Post";
import styles from "./FeaturedPosts.module.css";

const FeaturedPosts = ({ featured }) => {
	return (
		<div className={styles.blogPosts}>
			<div className={styles.container}>
				<div className="section-header">
					<h1 className="heading">Featured posts</h1>
				</div>
				<div className={styles.featuredPosts}>
					{featured.map((post) => (
						<Post key={post.index} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedPosts;
