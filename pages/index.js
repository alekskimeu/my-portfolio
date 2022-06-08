import Head from "next/head";

import { FeaturedPosts, HeroImage, Posts } from "../components";
import { getSortedPostsData } from "../lib/posts";
import { Hero } from "../components";

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
				<div className={styles.homeWrapper}>
					<HeroImage />
					<Posts posts={posts} />
				</div>
			</main>
		</>
	);
}

// Fetch posts
export async function getStaticProps() {
	const posts = getSortedPostsData().splice(0, 8);

	return {
		props: { posts },
	};
}
