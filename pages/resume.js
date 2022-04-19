import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import { ResumeItem } from "../components";
import { resumeData } from "../data/resume/resumeData";
import { educationData } from "../data/resume/educationData";

import styles from "../styles/Resume.module.css";
import "aos/dist/aos.css";

export default function Resume() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<>
			<Head>
				<title>Alex Kimeu - Resume</title>
				<meta name="description" content="Resume" />
				<meta
					name="keywords"
					content="Resume, CV, Professional Experience, Educational Background"
				/>
			</Head>
			<div className={styles.resume}>
				<div className="container">
					<div
						className={styles.resumeHeader}
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<h1 className={styles.heading}>Experience</h1>
					</div>
					<div className={styles.resumeWrapper}>
						{resumeData.map((item) => (
							<ResumeItem
								key={item.index}
								title={item.title}
								company={item.company}
								timeline={item.timeline}
								description={item.description}
								duties={item.duties}
							/>
						))}
					</div>

					<div
						className={styles.resumeHeader}
						style={{ marginTop: "5rem" }}
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<h1 className={styles.heading}>Education</h1>
					</div>
					<div className={styles.resumeWrapper}>
						{educationData.map((item) => (
							<ResumeItem
								key={item.index}
								title={item.title}
								company={item.company}
								timeline={item.timeline}
								description={item.description}
								duties={item.duties}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
