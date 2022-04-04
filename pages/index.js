import Head from "next/head";

import { Hero, Post, Project, Skills } from "../components";
import { getSortedPostsData } from "../lib/posts";
import { projectsData } from "../data/projects/data";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
	const projects = projectsData.slice(0, 2);
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

				{/* Projects */}
				<div className={styles.projects}>
					<div className="container">
						<div className="section-header">
							<h1 className="heading">Projects</h1>
						</div>
						<div className={styles.projectsWrapper}>
							{projects.map((project) => (
								<Project key={project.index} project={project} />
							))}
						</div>
					</div>
				</div>

				{/* Posts */}
				<div className={styles.blogPosts}>
					<div className="container">
						<div className="section-header">
							<h1 className="heading">Latest posts</h1>
						</div>
						<div className={styles.posts}>
							{posts.map((post) => (
								<Post key={post.index} post={post} />
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

// Fetch posts & projects
export async function getStaticProps() {
	const posts = getSortedPostsData().slice(0, 3);

	return {
		props: { posts },
	};
}
