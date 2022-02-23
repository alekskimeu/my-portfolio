import React from "react";
import { useTheme } from "next-themes";
import styles from "./Footer.module.css";

const Footer = () => {
	const { theme, setTheme } = useTheme();
	return (
		<footer
			className={styles.footer}
			style={{
				borderTop:
					theme === "light"
						? "1px solid rgba(231, 231, 231)"
						: "1px solid #2e313d",
			}}
		>
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
