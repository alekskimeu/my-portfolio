import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			className={styles.project}
			style={{
				borderTop: theme === "light" ? "2px solid #072227" : "1px solid white",
				boxShadow:
					theme === "light"
						? "3px 8px 16px rgb(231, 231, 231)"
						: "3px 8px 16px #072227",
			}}
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<h2 className={styles.title}>{project.title}</h2>
			<p className={styles.description}>{project.description}</p>
			<p className={styles.tech}>
				<span>Techs:</span> {project.techs.join(", ")}
			</p>
			<div className={styles.projectCta}>
				<Link href={`${project.code}`}>
					<a target="_blank" className={styles.link}>
						<i className="fab fa-github"></i> source
					</a>
				</Link>
				<Link href={`${project.demo}`}>
					<a target="_blank" className={styles.link}>
						<i className="fas fa-link"></i> live
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
