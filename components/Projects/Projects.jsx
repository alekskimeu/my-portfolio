import React, { useEffect } from "react";
import AOS from "aos";

import Project from "../Project/Project";

import "aos/dist/aos.css";
import { projectsData } from "../../data/projects/data";

import styles from "./Projects.module.css";
const Projects = () => {
	const projects = projectsData.slice(0, 2);

	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.projects}>
			<div className="container">
				<div
					className="section-header"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="heading">Projects</h1>
				</div>
				<div className={styles.projectsWrapper}>
					{projects.map((project) => (
						<Project key={project.index} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
