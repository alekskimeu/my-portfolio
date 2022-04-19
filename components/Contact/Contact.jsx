import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Contact.module.css";

const Contact = () => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.contact} data-aos="fade-up" data-aos-duration="1000">
			<div className="container">
				<div
					className={styles.customHeader}
					style={{
						borderTop:
							theme === "light"
								? "1px solid rgba(231, 231, 231)"
								: "1px solid #2e313d",
					}}
				>
					<h1 className={styles.heading}>Wanna Work with me?</h1>
					<p
						className={styles.description}
						style={{ color: theme === "light" ? "#334257" : "#EEEEEE" }}
					>
						I&#39;m available for freelance projects. <br />
						Shoot me an email
					</p>
				</div>
				<Link href="mailto:kimeualeks@gmail.com">
					<a
						style={{
							border:
								theme === "light" ? "1px solid #072227" : "1px solid white",
							color: theme === "light" ? "#072227" : "white",
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
