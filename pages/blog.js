import { useEffect, useState } from "react";
import Head from "next/head";
import AOS from "aos";

import { Post } from "../components";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Blog.module.css";
import "aos/dist/aos.css";

export default function Blog({ posts, featured }) {
	const [query, setQuery] = useState("");

	useEffect(() => {
		AOS.init();
	});
	return (
		<>
			<Head>
				<title>Blog | Alex Kimeu</title>
				<meta
					name="description"
					content="Writing on technical topics and techs I learn"
				/>
				<meta name="keywords" content="Blog, Technical writing" />
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
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
					<div className={styles.featuredPosts}>
						{featured.map((post) => (
							<Post key={post.index} post={post} />
						))}
					</div>

					<div
						className={styles.postsWrapper}
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						{posts
							.filter(
								(post) =>
									post.content.includes(query) || post.title.includes(query)
							)
							.map((post) => (
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
	const featured = posts.filter((post) => post.featured);

	return {
		props: {
			posts,
			featured,
		},
	};
}
