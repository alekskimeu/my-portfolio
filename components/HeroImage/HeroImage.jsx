import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
				Alex Kimeu
			</h1>
			<h2
				className={styles.profession}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				Software Developer
			</h2>
			<h3 className={styles.tagline}> I create with cool people 👨‍💻.</h3>
			<h3 className={styles.skills} data-aos="zoom-in" data-aos-duration="1000">
				React, Next, React Native, Node
			</h3>
			<div
				className={styles.herocta}
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<div className={styles.socialMedia}>
					<a
						href="https://twitter.com/alekskimeu"
						aria-label="Twitter"
						rel="noreferrer"
						target="_blank"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/alexkimeu/"
						aria-label="LinkedIn"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/alekskimeu"
						aria-label="Github"
						rel="noreferrer"
						target="_blank"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
