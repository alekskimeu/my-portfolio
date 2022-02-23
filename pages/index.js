import Head from "next/head";
import Link from "next/link";

import { Hero, Post, Project, Skills } from "../components";
import { getSortedPostsData } from "../lib/posts";
import { projectsData } from "../projects/data";
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
			</Head>
			<main>
				<Hero />
				<Skills />

				{/* Projects */}
				<div className={styles.projects}>
					<div className="container">
						<div className="section-header">
							<h1 className="heading">Projects</h1>
							<Link href="/projects">
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
							<Link href="/blog">
								<a>
									View All<i className="fas fa-arrow-right-long"></i>
								</a>
							</Link>
						</div>
						<div className={styles.posts}>
							{posts.map((post) => (
								<Post
									key={post.id}
									post={post}
									ert={Math.floor(post.contentHtml.split(/\s+/).length / 200)}
								/>
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

	return {
		props: { posts },
	};
}
