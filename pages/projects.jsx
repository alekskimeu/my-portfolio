import React from "react";
import { Project } from "../components";

import styles from "../styles/Projects.module.css";

const Projects = () => {
	return (
		<div className={styles.projects}>
			<div className="container">
				<div className={styles.projectsWrapper}>
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
			</div>
		</div>
	);
};

export default Projects;
