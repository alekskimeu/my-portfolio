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
				Hello, my name is <span>Alex,</span> a <span>Software Developer</span>{" "}
				based in Nairobi, Kenya.
			</p>
			<p className={styles.description}>
				I have hands-on experience building mobile & web applications using
				modern technologies.
			</p>
			<p className={styles.description}>
				Apart from coding & learning new techs, I write about tech in my{" "}
				<a
					href="https://aleks.hashnode.dev/"
					target="_blank"
					rel="noreferrer"
					className={styles.link}
				>
					Blog
				</a>{" "}
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
		</div>
	);
};

export default AboutInfo;
