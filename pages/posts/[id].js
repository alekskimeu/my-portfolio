import React from "react";
import Image from "next/image";
import image from "../../public/images/user.jpeg";

import { getAllPostIds, getPostData } from "../../lib/posts";

import styles from "../../styles/Post.module.css";
import Head from "next/head";

export default function Post({ post }) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<div className={styles.postPage}>
				<div className="container">
					<div className={styles.postWrapper}>
						<Image src={image} alt="" className={styles.postImg} />
						<div>
							<div className={styles.postHeader}>
								<h1 className={styles.title}>{post.title}</h1>
								<p className={styles.date}>{post.date}</p>
							</div>
							{Math.ceil(post.contentHtml.trim().split(/\s+/).length / 225)} min
							read
							<p className={styles.ert}> min read</p>
						</div>

						<div
							className={styles.postBody}
							dangerouslySetInnerHTML={{ __html: post.contentHtml }}
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
