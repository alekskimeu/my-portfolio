import React from "react";
import Link from "next/link";

import styles from "./Project.module.css";

const Project = () => {
	return (
		<div className={styles.project}>
			<h2 className={styles.title}>Noelas API</h2>
			<p className={styles.description}>
				The world breaks everyone, and afterwards, many are strong at the broke
				places
			</p>
			<p className={styles.tech}>
				<span>Techs:</span> CSS3, React, Redux
			</p>
			<div className={styles.projectCta}>
				<Link href="/">
					<a>
						<i className="fab fa-github"></i> Code
					</a>
				</Link>
				<Link href="/">
					<a>
						<i className="fas fa-link"></i> Demo
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
