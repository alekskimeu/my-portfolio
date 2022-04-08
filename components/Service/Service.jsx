import React from "react";
import styles from "./Service.module.css";

const Service = ({ service }) => {
	return (
		<div className={styles.service}>
			{service.icon}
			<div className={styles.content}>
				<h1 className={styles.title}>{service.title}</h1>
				<p className={styles.description}>{service.description}</p>
			</div>
		</div>
	);
};

export default Service;
