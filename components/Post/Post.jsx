import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AOS from "aos";

import styles from "./Post.module.css";
import "aos/dist/aos.css";

const Post = ({ post }) => {
	dayjs.extend(relativeTime);

	const { theme, setTheme } = useTheme();
	const imageName = post.title.split(" ").join("-").toLowerCase();
	useEffect(() => {
		AOS.init();
	});
	return (
		<div
			className={styles.post}
			style={{
				boxShadow:
					theme === "light"
						? "3px 8px 16px rgb(231, 231, 231)"
						: "3px 8px 16px #072227",
			}}
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div className={styles.postImageContainer}>
				<Image
					src={`/images/posts/${imageName}.jpg`}
					alt={post.title}
					className={styles.postImage}
					layout="responsive"
					width="300"
					height="150"
				/>
			</div>

			<div className={styles.body}>
				<Link href={`/blog/${post.id}`}>
					<a className={styles.title}>{post.title}</a>
				</Link>
				<p className={styles.excerpt}>
					{post.excerpt.substr(0, 40)}...{" "}
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
					<i className="fas fa-calendar"></i> {dayjs(post.date).fromNow()}
				</span>
			</div>
		</div>
	);
};

export default Post;
