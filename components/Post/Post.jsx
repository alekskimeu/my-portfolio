import React from "react";
import Image from "next/image";
import Link from "next/link";

import image from "../../public/images/user.jpeg";

import styles from "./Post.module.css";

const Post = ({ post }) => {
	return (
		<div className={styles.post}>
			<Image src={image} alt="" />
			<div className={styles.body}>
				<Link href="/">
					<a className={styles.title}>{post.title}</a>
				</Link>
				<p className={styles.excerpt}>
					{post.excerpt}
					<Link href="#">
						<a className={styles.linkMore}>Read more</a>
					</Link>
				</p>
			</div>
			<div className={styles.footer}>
				<span className={styles.eta}>5 min read</span>
				<span className={styles.date}>
					<i className="fas fa-calendar"></i> 13 Feb, 2022
				</span>
			</div>
		</div>
	);
};

export default Post;
