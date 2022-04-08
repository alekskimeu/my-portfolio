import Link from "next/link";
import { useTheme } from "next-themes";

import styles from "./Contact.module.css";

const Contact = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.contact}>
			<div className="container">
				<div className={styles.customHeader}>
					<h1 className={styles.heading}>Work with me</h1>
					<p className={styles.description}>
						I&#39;m available for freelance projects
					</p>
				</div>
				<Link href="mailto:kimeualeks@gmail.com">
					<a
						style={{
							color: theme === "light" ? "#072227" : "white",
							border:
								theme === "light" ? "2px solid #072227" : "2px solid white",
						}}
					>
						Email me<i className="fas fa-paper-plane"></i>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
