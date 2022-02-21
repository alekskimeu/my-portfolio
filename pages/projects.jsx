import React from "react";
import Head from "next/head";
import axios from "axios";
import { Project } from "../components";

import styles from "../styles/Projects.module.css";

const Projects = ({ projects }) => {
	console.log(projects);
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
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export async function getServerSideProps(context) {
	const data = await fetch("https://api.github.com/users/alekskimeu/repos");

	const projects = await data.json();

	return {
		props: {
			projects,
		},
	};
}

export default Projects;

