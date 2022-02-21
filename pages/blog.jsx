import Head from "next/head";
import axios from "axios";
import { Post } from "../components";

import styles from "../styles/Blog.module.css";

export default function Blog({ posts }) {
	console.log(posts.posts);
	return (
		<>
			<Head>
				<title>Alex Kimeu - Blog</title>
				<meta
					name="description"
					content="This is where I write about tech and share stuff I learn"
				/>
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
						{/* {posts.map((post) => (
							<Post key={post.id} />
						))} */}
					</div>
				</div>
			</main>
		</>
	);
}

export async function getServerSideProps(context) {
	const results = await axios.get(
		"https://my-admin-site.herokuapp.com/api/posts"
	);
	const posts = results;
	return {
		props: {
			posts,
		},
	};
}
