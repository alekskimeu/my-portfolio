import styles from "./ResumeItem.module.css";

const ResumeItem = () => {
	return (
		<div className={styles.resumeItem}>
			<div className={styles.resumeItemHeader}>
				<div>
					<h1 className={styles.profession}>Web Developer</h1>
					<h2 className={styles.company}>ZawadiZ</h2>
				</div>
				<p className={styles.timeline}>May, 2021 ~ Present</p>
			</div>
			<div className={styles.resumeBody}>
				<p className={styles.description}>
					The world breaks everyone, and afterwards, many are strong at the
					broken places:
				</p>
				<ul className={styles.resumeList}>
					<li>Database Administration</li>
					<li>Database Administration</li>
					<li>Database Administration</li>
					<li>Database Administration</li>
					<li>Database Administration</li>
					<li>Database Administration</li>
					<li>Database Administration</li>
					<li>Database Administration</li>
				</ul>
			</div>
		</div>
	);
};

export default ResumeItem;
