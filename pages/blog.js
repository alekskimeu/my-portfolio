import Head from "next/head";



import { useTheme } from "next-themes";



import { Post } from "../components";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Blog.module.css";


// TODO: Add Postman to the list of tools I use

export default function Blog({ posts }) {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<Head>
				<title>Alex Kimeu - Blog</title>
				<meta name="description" content="Writing on technical topics and techs I learn" />
				<meta name="keywords" content="Blog, Technical writing" />
			</Head>
			<main className={styles.blog}>
				<div className="container">
					<div
						className={styles.search}
						style={{
							background: theme === "light" ? "rgb(231, 231, 231)" : "white",
						}}
					>
						<i className="fas fa-search"></i>
						<input
							type="search"
							name="query"
							placeholder="Search Article"
							className={styles.searchInput}
							style={{
								background: theme === "light" ? "rgb(231, 231, 231)" : "white",
							}}
						/>
					</div>
					<div className={styles.postsWrapper}>
						{posts.map((post) => (
							<Post key={post.index} post={post} />
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