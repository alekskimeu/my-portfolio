import Link from "next/link";
import styles from "./AboutInfo.module.css";
const AboutInfo = () => {
	return (
		<div className={styles.aboutInfo}>
			<p className={styles.description}>
				Hello, my name is Alex Kimeu and I&#39;m a Software Developer based in
				Nairobi, Kenya.
			</p>
			<p className={styles.description}>
				Apart from coding & learning new techs, I write about tech in my{" "}
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				, & occasionally play King of The Hill on TryHackMe.
			</p>
			<p className={styles.description}>
				I&#39;m available for freelance projects. Shoot me an{" "}
				<a href="mailto:kimeualeks@gmail.com" target="_blank" rel="noreferrer">
					Email
				</a>{" "}
				& let&#39;s work together.
			</p>
			<p className={styles.description}>
				You can find my work on{" "}
				<a
					href="https://github.com/alekskimeu"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
			</p>
		</div>
	);
};

export default AboutInfo;
