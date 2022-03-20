import { ResumeItem } from "../components";

import styles from "../styles/Resume.module.css";

export default function Resume() {
	return (
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
	);
}
