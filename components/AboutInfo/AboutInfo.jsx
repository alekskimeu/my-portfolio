import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutInfo.module.css";

const AboutInfo = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			className={styles.aboutInfo}
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<p className={styles.description}>
				Hello, my name is Alex Kimeu and I&#39;m a Software Developer based in
				Nairobi, Kenya.
			</p>
			<p className={styles.description}>
				I have hands-on experience building mobile & web applications using
				modern technologies.
			</p>
			<p className={styles.description}>
				Apart from coding & learning new techs, I write about tech in my{" "}
				<Link href="/blog">
					<a className={styles.link}>Blog</a>
				</Link>{" "}
				& occasionally play{" "}
				<a
					href="https://tryhackme.com/games/koth"
					target="_blank"
					rel="noreferrer"
					className={styles.link}
				>
					KoTH
				</a>{" "}
				on TryHackMe.
			</p>
			<p className={styles.description}>
				If you would like to hire me for freelance projects, please shoot me an{" "}
				<a
					href="mailto:kimeualeks@gmail.com"
					target="_blank"
					rel="noreferrer"
					className={styles.link}
				>
					Email
				</a>{" "}
				& let&#39;s build awesome stuff.
			</p>
			<p className={styles.description}>
				You can find my work on{" "}
				<a
					className={styles.link}
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
