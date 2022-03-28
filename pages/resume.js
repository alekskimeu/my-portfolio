import Head from "next/head";
import { ResumeItem } from "../components";

import { resumeData } from "../data/resume/resumeData";
import { educationData } from "../data/resume/educationData";

import styles from "../styles/Resume.module.css";

export default function Resume() {
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
					<div className={styles.resumeHeader}>
						<h1 className={styles.heading}>Work Experience</h1>
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

					<div className={styles.resumeHeader} style={{ marginTop: "5rem" }}>
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
