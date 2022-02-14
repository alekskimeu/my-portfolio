import Head from "next/head";
import { Post } from "../components";

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
			<main>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</main>
		</>
	);
}
