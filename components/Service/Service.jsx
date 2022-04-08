import { useTheme } from "next-themes";
import styles from "./Service.module.css";

const Service = ({ service }) => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.service}>
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
