import { useEffect } from "react";
import { useTheme } from "next-themes";
import AOS from "aos";

import "aos/dist/aos.css";

import styles from "./Service.module.css";

const Service = ({ service }) => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			className={styles.service}
			style={{
				boxShadow:
					theme === "light"
						? "5px 8px 16px rgb(231, 231, 231)"
						: "5px 8px 16px #000",
				borderTop:
					theme === "light"
						? "3px solid #072227"
						: "3px solid rgba(231, 231, 231)",
			}}
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<div
				className={styles.icon}
				style={{ color: theme === "light" ? "#072227" : "white" }}
			>
				{service.icon}
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>{service.title}</h1>
				<p
					className={styles.description}
					style={{ color: theme === "light" ? "#334257" : "#EEEEEE" }}
				>
					{service.description}
				</p>
			</div>
		</div>
	);
};

export default Service;
