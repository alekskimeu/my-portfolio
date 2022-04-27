import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Skills.module.css";

const Skills = () => {
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
					<h4 className="subheading">Technologies I work with</h4>
				</div>
				<div className={styles.skillsWrapper}>
					<div>
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Frontend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
									alt="React"
									width={35}
									height={35}
								/>
								<Image
									src="/images/site/nextjs.png"
									alt="Next"
									width={35}
									height={35}
								/>
							</div>
						</div>
					</div>
					<div>
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>State</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
									alt="Redux"
									width={35}
									height={35}
								/>
								<Image
									src="https://pbs.twimg.com/profile_images/1377116487933030410/kyyHFjc2_350x350.jpg"
									alt="Recoil"
									width={35}
									height={35}
								/>
							</div>
						</div>
					</div>
					<div>
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Backend</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
									alt="Node Js"
									width={35}
									height={35}
								/>
								<Image
									src="https://avatars.githubusercontent.com/u/958072?s=200&v=4"
									alt="Laravel"
									width={35}
									height={35}
								/>
							</div>
						</div>
					</div>

					<div>
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Mobile</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://reactnative.dev/img/header_logo.svg"
									alt="React Native"
									width={35}
									height={28}
								/>
								<Image
									src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3577c2c5368af2ad5725ffa9a1/topics/java/java.png"
									alt="Java"
									width={35}
									height={35}
								/>
							</div>
						</div>
					</div>

					<div>
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Database</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
									alt="MySQL"
									width={35}
									height={35}
								/>
								<Image
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
									alt="MongoDB"
									width={35}
									height={35}
								/>
							</div>
						</div>
					</div>

					<div>
						<div
							className={styles.skillsCard}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>VCS</h1>
							</div>
							<div className={styles.skillsContainer}>
								<Image
									src="https://pbs.twimg.com/profile_images/1414990564358262661/r6YemvF9_350x350.jpg"
									alt="Redux"
									width={35}
									height={35}
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
