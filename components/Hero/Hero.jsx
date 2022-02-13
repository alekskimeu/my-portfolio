import React from "react";
import Image from "next/image";
import Link from "next/link";

import image from "../../public/images/aleki.jpeg";

import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>Hello, Alex here 👋</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
						nisi repellat aperiam dolor rerum quidem reiciendis earum dolorum
						exercitationem obcaecati fuga perspiciatis itaque ipsum consectetur.
						Facilis in modi nisi ratione.
					</p>
					<div className={styles.herocta}>
						<Link href="/">
							<a>Download CV</a>
						</Link>
					</div>
				</div>
				<div className={styles.image}>
					<Image src={image} alt="Alex Kimeu" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
