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
		<div className={styles.skills}>
			<div className="container">
				<div
					className="section-header"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="heading">Primary Skill Set</h1>
				</div>
				<div className={styles.skillsWrapper}>
					<div>
						{" "}
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #000",
								border:
									theme === "light"
										? "1px solid rgba(231, 231, 231)"
										: "1px solid #7E7474",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1
									className={styles.heading}
									style={{
										borderBottom:
											theme === "light"
												? "1px solid rgba(231, 231, 231)"
												: "1px solid #7E7474",
									}}
								>
									Frontend
								</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
									alt="React"
									width={32}
									height={32}
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
									alt="Next"
									width={32}
									height={32}
								/>
							</div>
						</div>
					</div>
					<div>
						{" "}
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #000",
								border:
									theme === "light"
										? "1px solid rgba(231, 231, 231)"
										: "1px solid #7E7474",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1
									className={styles.heading}
									style={{
										borderBottom:
											theme === "light"
												? "1px solid rgba(231, 231, 231)"
												: "1px solid #7E7474",
									}}
								>
									State
								</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
									alt="Redux"
									width={32}
									height={32}
								/>
								<Image
									src="https://pbs.twimg.com/profile_images/1377116487933030410/kyyHFjc2_400x400.jpg"
									alt="Recoil"
									width={32}
									height={32}
								/>
							</div>
						</div>
					</div>
					<div>
						{" "}
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #000",
								border:
									theme === "light"
										? "1px solid rgba(231, 231, 231)"
										: "1px solid #7E7474",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1
									className={styles.heading}
									style={{
										borderBottom:
											theme === "light"
												? "1px solid rgba(231, 231, 231)"
												: "1px solid #7E7474",
									}}
								>
									Backend
								</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
									alt="Node Js"
									width={32}
									height={32}
								/>
								<Image
									src="https://avatars.githubusercontent.com/u/958072?s=200&v=4"
									alt="Laravel"
									width={32}
									height={32}
								/>
							</div>
						</div>
					</div>

					<div>
						{" "}
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #000",
								border:
									theme === "light"
										? "1px solid rgba(231, 231, 231)"
										: "1px solid #7E7474",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1
									className={styles.heading}
									style={{
										borderBottom:
											theme === "light"
												? "1px solid rgba(231, 231, 231)"
												: "1px solid #7E7474",
									}}
								>
									Mobile
								</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://reactnative.dev/img/header_logo.svg"
									alt="React Native"
									width={32}
									height={32}
								/>
								<Image
									src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png"
									alt="Java"
									width={32}
									height={32}
								/>
							</div>
						</div>
					</div>

					<div>
						{" "}
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #000",
								border:
									theme === "light"
										? "1px solid rgba(231, 231, 231)"
										: "1px solid #7E7474",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1
									className={styles.heading}
									style={{
										borderBottom:
											theme === "light"
												? "1px solid rgba(231, 231, 231)"
												: "1px solid #7E7474",
									}}
								>
									Database
								</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
									alt="MySQL"
									width={32}
									height={32}
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
									alt="MongoDB"
									width={32}
									height={32}
								/>
							</div>
						</div>
					</div>

					<div>
						{" "}
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{
								boxShadow:
									theme === "light"
										? "5px 8px 16px rgb(231, 231, 231)"
										: "5px 8px 16px #000",
								border:
									theme === "light"
										? "1px solid rgba(231, 231, 231)"
										: "1px solid #7E7474",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1
									className={styles.heading}
									style={{
										borderBottom:
											theme === "light"
												? "1px solid rgba(231, 231, 231)"
												: "1px solid #7E7474",
									}}
								>
									VCS
								</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"
									alt="Redux"
									width={32}
									height={32}
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
