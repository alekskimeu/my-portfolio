import React from "react";
import Link from "next/link";
import { Project } from "..";

import { getProjectsData as projects } from "../../lib/projects";

import styles from "./Projects.module.css";

const Projects = () => {
	return (
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
	);
};

export default Projects;

