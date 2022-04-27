import { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.project} data-aos="fade-up" data-aos-duration="1000">
			<h2 className={styles.title}>{project.title}</h2>
			<p className={styles.description}>{project.description}</p>
			<p className={styles.tech}>
				<span>Techs:</span> {project.techs.join(", ")}
			</p>
			<div className={styles.projectCta}>
				<Link href={`${project.code}`}>
					<a target="_blank" className={styles.link}>
						<i className="fab fa-github"></i> Code
					</a>
				</Link>
				<Link href={`${project.demo}`}>
					<a target="_blank" className={styles.link}>
						<i className="fas fa-link"></i> Visit
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
