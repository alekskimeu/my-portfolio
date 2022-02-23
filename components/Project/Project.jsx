import React from "react";
import Link from "next/link";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	return (
		<div className={styles.project}>
			<h2 className={styles.title}>{project.title}</h2>
			<p className={styles.description}>{project.description}</p>
			<p className={styles.tech}>
				<span>Topics:</span> {project.techs.join(", ")}
			</p>
			<div className={styles.projectCta}>
				<Link href={`${project.code}`}>
					<a target="_blank">
						<i className="fab fa-github"></i> Code
					</a>
				</Link>
				<Link href={`${project.demo}`}>
					<a target="_blank">
						<i className="fas fa-link"></i> Demo
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
