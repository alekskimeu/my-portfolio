import { useEffect } from "react";
import { useTheme } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";

import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			className={styles.blogPosts}
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div className="container">
				<div className="section-header">
					<h1 className="heading">Latest posts</h1>
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
