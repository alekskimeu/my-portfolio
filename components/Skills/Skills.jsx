import Image from "next/image";
import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
	return (
		<div className={styles.skills}>
			<div className="container">
				<div className="section-header">
					<h1 className="heading">Tech stack</h1>
				</div>
				<div className={styles.skillsWrapper}>
					<div>
						{" "}
						<div className={styles.skillsCard}>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Frontend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
									alt="JavaScript"
									width="60"
									height="60"
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
									alt="React"
									width="60"
									height="60"
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
									alt="Next"
									width="60"
									height="60"
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
									alt="Redux"
									width="60"
									height="60"
								/>
							</div>
						</div>
					</div>
					<div>
						{" "}
						<div className={styles.skillsCard}>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Backend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
									alt="Node Js"
									width="60"
									height="60"
								/>
								<Image
									src="https://avatars.githubusercontent.com/u/958072?s=200&v=4"
									alt="Laravel"
									width="60"
									height="60"
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg"
									alt="Django"
									width="60"
									height="60"
								/>
							</div>
						</div>
					</div>
					<div>
						{" "}
						<div className={styles.skillsCard}>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Database</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
									alt="MySQL"
									width="60"
									height="60"
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
									alt="MongoDB"
									width="60"
									height="60"
								/>
							</div>
						</div>
					</div>

					<div>
						{" "}
						<div className={styles.skillsCard}>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Mobile</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://reactnative.dev/img/header_logo.svg"
									alt="React Native"
									width="60"
									height="60"
								/>
								<Image
									src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png"
									alt="MongoDB"
									width="60"
									height="60"
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
