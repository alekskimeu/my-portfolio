import React from "react";

import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
	return (
		<div className={styles.socialMedia}>
			<a
				href="mailto:kimeualeks@gmail.com"
				aria-label="Email"
				rel="noreferrer"
				target="_blank"
			>
				<i className="fas fa-envelope"></i>
			</a>

			<a
				href="https://www.linkedin.com/in/alexkimeu/"
				aria-label="LinkedIn"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fab fa-linkedin"></i>
			</a>
			<a
				href="https://github.com/alekskimeu"
				aria-label="Github"
				rel="noreferrer"
				target="_blank"
			>
				<i className="fab fa-github"></i>
			</a>
			<a
				href="https://twitter.com/alekskimeu"
				aria-label="Twitter"
				rel="noreferrer"
				target="_blank"
			>
				<i className="fab fa-twitter"></i>
			</a>

			<a
				href="https://medium.com/@alexkimeu0"
				aria-label="Medium"
				rel="noreferrer"
				target="_blank"
			>
				<i className="fab fa-medium"></i>
			</a>
		</div>
	);
};

export default SocialIcons;
