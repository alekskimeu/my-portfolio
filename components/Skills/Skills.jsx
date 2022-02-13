import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
	return (
		<div className={styles.skills}>
			<div className={styles.container}>
				<div className={styles.skillsWrapper}>
					<div>
						{" "}
						<div className={styles.skillsCard}>
							<div className={styles.skillsHeader}>
								<h1 className={styles.heading}>Database</h1>
							</div>
							<div className={styles.skillsContainer}>
								<i className="fab fa-facebook"></i>
								<i className="fab fa-facebook"></i>{" "}
								<i className="fab fa-facebook"></i>{" "}
								<i className="fab fa-facebook"></i>
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
								<i className="fab fa-facebook"></i>
								<i className="fab fa-facebook"></i>{" "}
								<i className="fab fa-facebook"></i>{" "}
								<i className="fab fa-facebook"></i>
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
								<i className="fab fa-facebook"></i>
								<i className="fab fa-facebook"></i>{" "}
								<i className="fab fa-facebook"></i>{" "}
								<i className="fab fa-facebook"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
