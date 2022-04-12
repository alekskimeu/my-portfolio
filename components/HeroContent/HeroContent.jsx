import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	const { theme, setTheme } = useTheme();

	const [intro, setIntro] = useState(
		"Who am I? Not entirely sure. Every day I'm still trynna figure it out."
	);

	setTimeout(() => {
		setIntro(
			"Oh, wait! I'm a dedicated & passionate Software Developer with 3+ years of progressive experience creating solutions with technology."
		);
	}, 5000);

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Hello, World 👋</h1>
			<p
				className={styles.description}
				style={{ color: theme === "light" ? "#334257" : "#EEEEEE" }}
			>
				{intro}
			</p>
			<p
				className={styles.description}
				style={{ color: theme === "light" ? "#334257" : "#EEEEEE" }}
			>
				Apart from coding & learning new techs, I write about tech in my{" "}
				<Link href="/blog">
					<a>BLOG</a>
				</Link>{" "}
				& about general life stuff on{" "}
				<a href="#" target="_blank">
					BDADG
				</a>
			</p>

			<a
				href="https://drive.google.com/uc?export=download&id=1EjlxPcJzYvR8DArECErljA3CYzensdkj"
				className={styles.btnDownload}
				style={{
					border: theme === "light" ? "2px solid #222831" : "2px solid white",
					color: theme === "light" ? "#222831" : "white",
				}}
			>
				Download CV <i className="fas fa-download"></i>
			</a>
		</div>
	);
};

export default HeroContent;
