import Link from "next/link";
import { useTheme } from "next-themes";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Hello, World 👋</h1>

			<p className={styles.description}>
				I&#39;m a passionate Software Developer with 3+ years of progressive
				experience creating impactful solutions with technology.
			</p>
			<p className={styles.description}>
				Apart from coding & learning new techs, I write about tech in my{" "}
				<Link href="/blog">
					<a>blog</a>
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
					border: theme === "light" ? "2px solid #BB6464" : "2px solid white",
					color: theme === "light" ? "#BB6464" : "white",
				}}
			>
				Download CV <i className="fas fa-download"></i>
			</a>
		</div>
	);
};

export default HeroContent;
