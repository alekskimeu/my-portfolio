import Head from "next/head";
import { Project } from "../components";

import { projectsData } from "../projects/data";

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
						{projectsData.map((project) => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

