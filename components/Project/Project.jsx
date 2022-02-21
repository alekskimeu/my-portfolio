import React from "react";
import Link from "next/link";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	return (
		<div className={styles.project}>
			<h2 className={styles.title}>Noelas API</h2>
			<p className={styles.description}>eCommerce platform API</p>
			<p className={styles.tech}>
				<span>Topics:</span> Node, Express, MongoDB
			</p>
			<div className={styles.projectCta}>
				<Link href="#">
					<a>
						<i className="fab fa-github"></i> Code
					</a>
				</Link>
				<Link href="#">
					<a>
						<i className="fas fa-link"></i> Demo
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
