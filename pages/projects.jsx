import React from "react";
import Head from "next/head";
import { Project } from "../components";

import { getProjectsData } from "../lib/projects";

import styles from "../styles/Projects.module.css";

export default function Projects({ projects }) {
	return (
		<>
			<Head>
				<title>Alex Kimeu - Projects</title>
				<meta name="description" content="Software projects I have worked on" />
			</Head>
			<div className={styles.projects}>
				<div className="container">
					<div className={styles.projectsWrapper}>
						{projects.map((project) => (
							<Project key={project.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const projects = getProjectsData();
	return {
		props: { projects },
	};
}


