import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.copy}>
					&copy; <span>Alex Kimeu</span>
					{new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
