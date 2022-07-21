import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import SocialIcons from "../SocialIcons/SocialIcons";

import image from "../../public/images/site/profile.jpeg";

import styles from "./HeroImage.module.css";

const HeroImage = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.image}>
			<div
				className={styles.imageContainer}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<Image
					src={image}
					alt="Alex Kimeu"
					className={styles.photo}
					width={200}
					height={200}
				/>
			</div>
			<h1 className={styles.name} data-aos="zoom-in" data-aos-duration="1000">
				ALEX KIMEU
			</h1>
			<h2
				className={styles.profession}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				Software Developer
			</h2>
			<h3
				className={styles.tagline}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				React | Next | React Native | Node | Laravel
			</h3>
			<p
				className={styles.description}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				&lsquo;Whatever you do, don&#39;t let inertia & complacency keep you
				from pushing yourself a little bit every day.&rsquo;
			</p>
		</div>
	);
};

export default HeroImage;
