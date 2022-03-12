import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import image from "../../public/images/user.jpg";

import styles from "./Post.module.css";

const Post = ({ post }) => {
	const { theme, setTheme } = useTheme();
	return (
		<div
			className={styles.post}
			style={{
				boxShadow:
					theme === "light"
						? "3px 8px 16px rgb(231, 231, 231)"
						: "3px 8px 16px #072227",
			}}
		>
			<Image
				src={image}
				alt={post.title}
				className={styles.postImage}
				layout="responsive"
			/>

			<div className={styles.body}>
				<Link href={`/blog/${post.id}`}>
					<a className={styles.title}>{post.title.substr(0, 40)}...</a>
				</Link>
				<p className={styles.excerpt}>
					{post.excerpt.substr(0, 60)}...{" "}
					<Link href={`/blog/${post.id}`}>
						<a className={styles.linkMore}>Read post</a>
					</Link>
				</p>
			</div>

			<div className={styles.footer}>
				<span className={styles.eta}>
					{Math.floor(post.content.split(/\s+/).length / 200)} min read
				</span>
				<span className={styles.date}>
					<i className="fas fa-calendar"></i> {post.date}
				</span>
			</div>
		</div>
	);
};

export default Post;
