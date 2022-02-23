import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	const { theme, setTheme } = useTheme();

	return (
		<div
			className={styles.project}
			style={{
				boxShadow:
					theme === "light"
						? "3px 8px 16px rgb(231, 231, 231)"
						: "3px 8px 16px #222831",

				borderTop:
					theme === "light" ? "2px solid #222831" : "2px solid #222831",
			}}
		>
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
