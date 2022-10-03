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
				Hello! My name is <span>Alex Kimeu</span>. I&#39;m a{" "}
				<span>Software Developer</span> based in Nairobi, Kenya.
			</p>
			<p className={styles.description}>
				It&#39;s amazing that we live in an age where we can make many
				possibilities with technology & I&#39;m ready to collaborate with other
				developers in my career to develop solutions geared to improve
				performance & accelerate business processes.
			</p>
			<br />
			<p className={styles.description}>Let&#39;s connect!</p>
		</div>
	);
};

export default AboutInfo;
