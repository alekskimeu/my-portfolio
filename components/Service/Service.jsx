import { useTheme } from "next-themes";
import styles from "./Service.module.css";

const Service = ({ service }) => {
	const { theme, setTheme } = useTheme();

	return (
		<div
			className={styles.service}
			style={{
				border: theme === "light" ? "none" : "1px solid white",
				borderTop: theme === "light" ? "2px solid #072227" : "1px solid white",
				boxShadow:
					theme === "light"
						? "5px 8px 16px rgb(231, 231, 231)"
						: "5px 8px 16px #072227",
			}}
		>
			{service.icon}
			<div className={styles.content}>
				<h1
					className={styles.title}
					style={{ color: theme === "light" ? "#072227" : "white" }}
				>
					{service.title}
				</h1>
				<p
					className={styles.description}
					style={{ color: theme === "light" ? "#072227" : "white" }}
				>
					{service.description}
				</p>
			</div>
		</div>
	);
};

export default Service;
