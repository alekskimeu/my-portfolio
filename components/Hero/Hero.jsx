import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";

import styles from "./Hero.module.css";

// How to leave your 9-5 with class & dignity
const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<HeroImage />
			</div>
		</div>
	);
};

export default Hero;
