import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useTheme } from "next-themes";

import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Post } from "../../components";
import { getAllPostIds, getOtherPosts, getPostData } from "../../lib/posts";

import styles from "../../styles/Post.module.css";
import Link from "next/link";

export default function BlogPost({ post, posts }) {
	const { theme, setTheme } = useTheme();
	dayjs.extend(relativeTime);

	const imageName = post.title.split(" ").join("-").toLowerCase();
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.excerpt} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@alekskimeu" />
				<meta name="twitter:title" content={post.title} />
				<meta name="twitter:description" content={post.excerpt} />
				<meta
					name="twitter:image"
					content={`https://alex-kimeu.com/_next/image?url=%2Fimages%2Fposts%2F${imageName}.jpg&w=640&q=75`}
				/>
			</Head>
			<div className={styles.postPage}>
				<div className="container">
					<div className={styles.postWrapper}>
						<Image
							src={`/images/posts/${imageName}.jpg`}
							alt={post.title}
							className={styles.postImg}
							layout="responsive"
							width="400"
							height="220"
						/>
						<div>
							<div className={styles.postHeader}>
								<h1 className={styles.title}>{post.title}</h1>
								<p className={styles.date}>{dayjs(post.date).fromNow()}</p>
							</div>

							<p className={styles.ert}>
								{Math.floor(post.content.split(/\s+/).length / 200)} min read
							</p>
						</div>

						<div className={styles.postIntro}>
							<p className={styles.intro}>{post.excerpt}</p>
						</div>

						<div
							style={{ color: theme === "light" ? "#072227" : "white" }}
							className={styles.postBody}
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
					</div>
				</div>

				<div
					className={styles.relatedPosts}
					style={{
						borderTop:
							theme === "light"
								? "1px solid rgb(231, 231, 231)"
								: "1px solid #24242f",
					}}
				>
					<div className="section-header" style={{ marginTop: "3rem" }}>
						<h3 className="heading">Related posts</h3>
						<Link href="/blog">
							<a>
								All posts <i className="fas fa-arrow-right-long"></i>
							</a>
						</Link>
					</div>
					<div className={styles.otherPosts}>
						{posts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	// Return a list of possible values for id
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch specific post given the id in params
	const post = await getPostData(params.id);

	// Fetch other posts
	const posts = await getOtherPosts(params.id);
	return {
		props: { post, posts },
	};
}


