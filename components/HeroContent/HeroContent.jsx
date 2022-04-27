import { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.content} data-aos="fade-up" data-aos-duration="1000">
			<h1 className={styles.title}>Hello, World 👋! </h1>
			<p className={styles.description}>
				I&#39;m a dedicated & passionate Software Developer with 3+ years of
				progressive experience creating solutions with technology.
			</p>
			<p className={styles.description}>
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
			>
				Download CV <i className="fas fa-download"></i>
			</a>
		</div>
	);
};

export default HeroContent;
