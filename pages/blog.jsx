import Head from "next/head";
import { Post } from "../components";

import styles from "../styles/Blog.module.css";

export default function Blog() {
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
					<div className={styles.postsWrapper}>
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
				</div>
			</main>
		</>
	);
}
