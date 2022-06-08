import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import styles from "./Post.module.css";

const Post = ({ post, image }) => {
	useEffect(() => {
		AOS.init();
	});

	dayjs.extend(relativeTime);

	const imageName = post.title.split(" ").join("-").toLowerCase();

	return (
		<div className={styles.post} data-aos="zoom-in" data-aos-duration="1000">
			{image && (
				<div className={styles.postImageContainer}>
					<Image
						src={`/images/posts/${imageName}.jpg`}
						alt={post.title}
						className={styles.postImage}
						layout="responsive"
						width="300"
						height="180"
					/>
				</div>
			)}

			<div
				className={styles.body}
				style={{ padding: image ? "1rem" : "1.5rem 2rem" }}
			>
				<Link href={`/blog/${post.id}`}>
					<a className={styles.title}>{post.title}</a>
				</Link>
				<p className={styles.excerpt}>
					{image ? post.excerpt.substr(0, 100) : post.excerpt.substr(0, 120)}...
				</p>
				<Link href={`/blog/${post.id}`}>
					<a className={styles.btnMore}>Read post</a>
				</Link>
			</div>

			<div
				className={styles.footer}
				style={{ padding: image ? "1rem" : "0 2rem 2rem 2rem" }}
			>
				<span className={styles.eta}>
					{Math.floor(post.content.split(/\s+/).length / 200)} min read
				</span>
				<span className={styles.date}>
					<i className="fas fa-calendar"></i> {dayjs(post.date).fromNow()}
				</span>
			</div>
		</div>
	);
};

export default Post;
