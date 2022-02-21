import React from "react";
import Link from "next/link";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	return (
		<div className={styles.project}>
			<h2 className={styles.title}>{project.name}</h2>
			<p className={styles.description}>{project.description}</p>
			<p className={styles.tech}>
				<span>Topics:</span> {project.topics.join(", ")}
			</p>
			<div className={styles.projectCta}>
				<Link href={project?.html_url}>
					<a>
						<i className="fab fa-github"></i> Code
					</a>
				</Link>
				<Link href={project.homepage ? project.homepage : "#"}>
					<a>
						<i className="fas fa-link"></i> Demo
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
