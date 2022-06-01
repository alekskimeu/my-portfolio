import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
	return (
		<div className={styles.posts}>
			{posts.map((post) => (
				<Post key={post.index} post={post} />
			))}
		</div>
	);
};

export default Posts;
