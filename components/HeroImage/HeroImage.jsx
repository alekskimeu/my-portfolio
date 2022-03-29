import Image from "next/image";
import { useTheme } from "next-themes";

import image from "../../public/images/site/profile.png";

import styles from "./HeroImage.module.css";

const HeroImage = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles.image}>
			<Image
				src={image}
				alt="Alex Kimeu"
				className={styles.photo}
				width="200"
				height="200"
			/>
			<h1 className={styles.name}>Alex Kimeu</h1>
			<div className={styles.herocta}>
				<div className={styles.socialMedia}>
					<a
						href="https://twitter.com/alekskimeu"
						aria-label="Twitter"
						rel="noreferrer"
						target="_blank"
						style={{ color: theme === "light" ? "#222831" : "white" }}
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/alexkimeu/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noreferrer"
						style={{ color: theme === "light" ? "#222831" : "white" }}
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/alekskimeu"
						aria-label="Github"
						rel="noreferrer"
						target="_blank"
						style={{ color: theme === "light" ? "#222831" : "white" }}
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
