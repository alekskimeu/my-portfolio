import { useTheme } from "next-themes";

import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";

import styles from "./Hero.module.css";

// How to leave your 9-5 with class & dignity
const Hero = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className={styles.hero}>
			<div
				className={styles.container}
				style={{
					border:
						theme === "light"
							? "1px solid #222831"
							: "1px solid rgba(231, 231, 231, .5)",
				}}
			>
				<HeroContent />
				<HeroImage />
			</div>
		</div>
	);
};

export default Hero;
