import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.copy}>
					<span>
						With <i className="fas fa-heart"></i> by{" "}
						<a
							href="https://twitter.com/alekskimeu"
							target="_blank"
							rel="noreferrer"
						>
							Alex
						</a>{" "}
					</span>
					&copy;
					{new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
