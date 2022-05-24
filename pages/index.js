import Head from "next/head";

import { FeaturedPosts, Posts } from "../components";
import { getSortedPostsData } from "../lib/posts";

import styles from "../styles/Home.module.css";

export default function Home({ posts, featured }) {
	return (
		<>
			<Head>
				<title>Alex Kimeu | Software Developer, Limitless learner </title>
				<meta
					name="description"
					content="Software Developer | Limitless learner | Blogger"
				/>
				<meta name="keywords" content="Alex Kimeu, Software Developer" />
			</Head>
			<main className={styles.home}>
				<FeaturedPosts featured={featured} />
				<Posts posts={posts} />
			</main>
		</>
	);
}

// Fetch posts
export async function getStaticProps() {
	const featured = getSortedPostsData().splice(0, 2);
	const posts = getSortedPostsData().splice(2, 8);
	// await generateRss();

	return {
		props: { posts, featured },
	};
}
