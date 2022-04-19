import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import { Project } from "../components";

import { projectsData } from "../data/projects/data";

import styles from "../styles/Projects.module.css";
import "aos/dist/aos.css";

export default function Projects() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<>
			<Head>
				<title>Alex Kimeu - Projects</title>
				<meta name="description" content="Software projects I have worked on" />
				<meta name="keywords" content="Tech projects" />
			</Head>
			<div className={styles.projects}>
				<div className="container">
					<div
						className={styles.projectsWrapper}
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						{projectsData.map((project) => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
