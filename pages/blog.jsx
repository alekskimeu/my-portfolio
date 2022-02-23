import Head from "next/head";
import { Post } from "../components";

import { getSortedPostsData } from "../lib/posts";

import styles from "../styles/Blog.module.css";

export default function Blog({ posts }) {
	return (
		<>
			<Head>
				<title>Alex Kimeu - Blog</title>
				<meta name="description" content="No way he writes!" />
			</Head>
			<main className={styles.blog}>
				<div className="container">
					<div className={styles.search}>
						<i className="fas fa-search"></i>
						<input
							type="search"
							name="query"
							placeholder="Search Article"
							className={styles.searchInput}
						/>
					</div>
					<div className={styles.postsWrapper}>
						{posts.map((post) => (
							<Post key={post.id} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const posts = getSortedPostsData();
	return {
		props: {
			posts,
		},
	};
}
