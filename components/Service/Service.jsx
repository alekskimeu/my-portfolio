import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import styles from "./Service.module.css";

const Service = ({ service }) => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.service} data-aos="fade-up" data-aos-duration="1000">
			<div className={styles.icon}>{service.icon}</div>
			<div className={styles.content}>
				<h1 className={styles.title}>{service.title}</h1>
				<p className={styles.description}>{service.description}</p>
			</div>
		</div>
	);
};

export default Service;
