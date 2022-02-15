import React from "react";
import Image from "next/image";
import Link from "next/link";

import image from "../../public/images/user.jpeg";

import styles from "./Post.module.css";

const Post = () => {
	return (
		<div className={styles.post}>
			<Image src={image} alt="" />
			<div className={styles.body}>
				<Link href="/">
					<a className={styles.title}>Git and Github</a>
				</Link>
				<p className={styles.excerpt}>
					The world breaks everyone, and afterwards, many are strong at the
					broken places.
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
