import React from "react";
import Image from "next/image";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";

import image from "../../public/images/user.jpg";

import styles from "../../styles/Post.module.css";

export default function Post({ post }) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={`${post.excerpt}`} />
			</Head>
			<div className={styles.postPage}>
				<div className="container">
					<div className={styles.postWrapper}>
						<Image
							src={image}
							alt={post.title}
							className={styles.postImg}
							layout="responsive"
						/>
						<div>
							<div className={styles.postHeader}>
								<h1 className={styles.title}>{post.title}</h1>
								<p className={styles.date}>{post.date}</p>
							</div>

							<p className={styles.ert}>
								{Math.floor(post.content.split(/\s+/).length / 200)} min read
							</p>
						</div>

						<div
							className={styles.postBody}
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
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
	return {
		props: { post },
	};
}
