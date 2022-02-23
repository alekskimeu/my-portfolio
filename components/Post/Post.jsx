import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import image from "../../public/images/user.jpeg";

import styles from "./Post.module.css";

const Post = ({ post }) => {
	console.log(post.contentHtml);
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
			<Image src={image} alt="" />
			<div className={styles.body}>
				<Link href={`/posts/${post.id}`}>
					<a className={styles.title}>{post.title}</a>
				</Link>
				<p className={styles.excerpt}>
					{post.excerpt}...{" "}
					<Link href={`/posts/${post.id}`}>
						<a className={styles.linkMore}>Read more</a>
					</Link>
				</p>
			</div>

			<div className={styles.footer}>
				<span className={styles.eta}>
					{Math.floor(post.contentHtml.split(/\s+/).length / 225)} min read
				</span>
				<span className={styles.date}>
					<i className="fas fa-calendar"></i> {post.date}
				</span>
			</div>
		</div>
	);
};

export default Post;
