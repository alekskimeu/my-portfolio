import Link from "next/link";
import React from "react";
import { Post } from "../";

import styles from "./Posts.module.css";

const Posts = () => {
	return (
		<>
			<div className={styles.blogPosts}>
				<div className="container">
					<div className="section-header">
						<h1 className="heading">Latest posts</h1>
						<Link href="/">
							<a>
								View All <i className="fas fa-arrow-right"></i>
							</a>
						</Link>
					</div>
					<div className={styles.posts}>
						<Post />
						<Post />
					</div>
				</div>
			</div>
		</>
	);
};

export default Posts;