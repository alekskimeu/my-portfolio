import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.blogPosts}>
			<div className={styles.container}>
				<div
					className={styles.posts}
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					{posts.map((post) => (
						<Post key={post.index} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Posts;
