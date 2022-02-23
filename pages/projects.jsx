import React from "react";
import Head from "next/head";
import { Project } from "../components";

import styles from "../styles/Projects.module.css";

export default function Projects () {
	return (
		<>
			<Head>
				<title>Alex Kimeu - Projects</title>
				<meta name="description" content="Software projects I have worked on" />
			</Head>
			<div className={styles.projects}>
				<div className="container">
					<div className={styles.projectsWrapper}>
						<Project />
						<Project />
						<Project />
						<Project />
					</div>
				</div>
			</div>
		</>
	);
};


