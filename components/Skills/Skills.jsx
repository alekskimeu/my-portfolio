import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Skills.module.css";

const Skills = () => {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.skills} data-aos="fade-up" data-aos-duration="1000">
			<div className="container">
				<div className="section-header">
					<h1 className="heading">Primary Skill Set</h1>
				</div>
				<div className={styles.skillsWrapper}>
					<div data-aos="fade-up" data-aos-duration="1000">
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								borderTop:
									theme === "light" ? "2px solid #072227" : "1px solid white",
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #072227",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Frontend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
									alt="React"
									width={50}
									height={50}
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
									alt="Next"
									width={50}
									height={50}
								/>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" data-aos-duration="1000">
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								borderTop:
									theme === "light" ? "2px solid #072227" : "1px solid white",
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #072227",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Backend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
									alt="Node Js"
									width={50}
									height={50}
								/>
								<Image
									src="https://avatars.githubusercontent.com/u/958072?s=200&v=4"
									alt="Laravel"
									width={50}
									height={50}
								/>
							</div>
						</div>
					</div>
					<div data-aos="fade-up" data-aos-duration="1000">
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								borderTop:
									theme === "light" ? "2px solid #072227" : "1px solid white",
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #072227",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Database</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
									alt="MySQL"
									width={50}
									height={50}
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
									alt="MongoDB"
									width={50}
									height={50}
								/>
							</div>
						</div>
					</div>

					<div data-aos="fade-up" data-aos-duration="1000">
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								borderTop:
									theme === "light" ? "2px solid #072227" : "1px solid white",
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #072227",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Mobile</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://reactnative.dev/img/header_logo.svg"
									alt="React Native"
									width={50}
									height={50}
								/>
								<Image
									src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png"
									alt="Java"
									width={50}
									height={50}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
