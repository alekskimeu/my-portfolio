import Head from "next/head";
import Link from "next/link";

import { Hero, Post, Project, Skills } from "../components";
import { getSortedPostsData } from "../lib/posts";
import { getProjectsData } from "../lib/projects";
import styles from "../styles/Home.module.css";

export default function Home({ posts, projects }) {
	return (
		<>
			<Head>
				<title>Alex Kimeu - Homepage </title>
				<meta
					name="description"
					content="Software Developer | Limitless learner | Blogger"
				/>
			</Head>
			<main>
				<Hero />
				<Skills />

				{/* Projects */}
				<div className={styles.projects}>
					<div className="container">
						<div className="section-header">
							<h1 className="heading">Projects</h1>
							<Link href="/">
								<a>
									View all<i className="fas fa-arrow-right-long"></i>
								</a>
							</Link>
						</div>
						<div className={styles.projectsWrapper}>
							{projects.map((project) => (
								<Project key={project.id} project={project} />
							))}
						</div>
					</div>
				</div>

				{/* Posts */}
				<div className={styles.blogPosts}>
					<div className="container">
						<div className="section-header">
							<h1 className="heading">Latest posts</h1>
							<Link href="/">
								<a>
									View All<i className="fas fa-arrow-right-long"></i>
								</a>
							</Link>
						</div>
						<div className={styles.posts}>
							{posts.map((post) => (
								<Post key={post.id} post={post} />
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
	const posts = getSortedPostsData().slice(0, 2);
	const projects = getProjectsData().slice(0, 2);

	return {
		props: { posts, projects },
	};
}
