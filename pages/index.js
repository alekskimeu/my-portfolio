import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import {
	Contact,
	Hero,
	Posts,
	Projects,
	Services,
	Skills,
} from "../components";
import { getSortedPostsData } from "../lib/posts";
import { useEffect } from "react";

export default function Home({ posts }) {
	useEffect(() => {
		AOS.init();
	});

	return (
		<>
			<Head>
				<title>Alex Kimeu - Homepage </title>
				<meta
					name="description"
					content="Software Developer | Limitless learner | Blogger"
				/>
				<meta name="keywords" content="Alex Kimeu, Software Developer" />
			</Head>
			<main>
				<Hero />
				<Skills />
				<Services />
				<Projects />
				<Posts posts={posts} />
				<Contact />
			</main>
		</>
	);
}

// Fetch posts & projects
export async function getStaticProps() {
  const posts = getSortedPostsData().slice(0, 3);

  return {
    props: { posts }
  };
}