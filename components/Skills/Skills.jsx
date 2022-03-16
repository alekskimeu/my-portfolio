import Image from "next/image";
import { useTheme } from "next-themes";

import styles from "./Skills.module.css";

const Skills = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.skills}>
			<div className="container">
				<div className="section-header">
					<h1 className="heading">Skillset</h1>
				</div>
				<div className={styles.skillsWrapper}>
					<div>
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								border:
									theme === "light"
										? "1px solid rgb(231, 231, 231)"
										: "1px solid #222831",
								boxShadow:
									theme === "light"
										? "3px 8px 16px rgb(231, 231, 231)"
										: "3px 8px 16px #222831",
							}}
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Frontend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
									alt="JavaScript"
									width={50}
									height={50}
								/>
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
					<div>
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								border:
									theme === "light"
										? "1px solid rgb(231, 231, 231)"
										: "1px solid #222831",
								boxShadow:
									theme === "light"
										? "3px 8px 16px rgb(231, 231, 231)"
										: "3px 8px 16px #222831",
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
					<div>
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								border:
									theme === "light"
										? "1px solid rgb(231, 231, 231)"
										: "1px solid #222831",
								boxShadow:
									theme === "light"
										? "3px 8px 16px rgb(231, 231, 231)"
										: "3px 8px 16px #222831",
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

					<div>
						{" "}
						<div
							className={styles.skillsCard}
							style={{
								border:
									theme === "light"
										? "1px solid rgb(231, 231, 231)"
										: "1px solid #222831",
								boxShadow:
									theme === "light"
										? "3px 8px 16px rgb(231, 231, 231)"
										: "3px 8px 16px #222831",
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
