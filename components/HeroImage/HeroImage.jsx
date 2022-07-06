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
				&lsquo;I create with cool people.&rsquo;
			</h3>
			<p
				className={styles.description}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<i className="fas fa-arrow-right-long fa-xs"></i>
				Whatever you do, don&#39;t let inertia & complacency keep you from
				pushing yourself a little bit every day.
				<i className="fas fa-arrow-left-long fa-xs"></i>
			</p>
		</div>
	);
};

export default HeroImage;
