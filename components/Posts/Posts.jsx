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
			<div className="container">
				<div
					className="section-header"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="heading">Latest posts</h1>
					<h4 className="subheading">Sometimes I write. Check it out</h4>
				</div>
				<div className={styles.posts}>
					{posts.map((post) => (
						<Post key={post.index} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Posts;
