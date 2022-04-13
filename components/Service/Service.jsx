import { useTheme } from "next-themes";
import styles from "./Service.module.css";

const Service = ({ service }) => {
	const { theme, setTheme } = useTheme();

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
