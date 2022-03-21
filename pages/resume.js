import Head from "next/head";
import { ResumeItem } from "../components";

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
					<div className={styles.header}></div>
					<div className={styles.resumeWrapper}>
						<ResumeItem />
						<ResumeItem />
						<ResumeItem />
						<ResumeItem />
						<ResumeItem />
					</div>
				</div>
			</div>
		</>
	);
}
