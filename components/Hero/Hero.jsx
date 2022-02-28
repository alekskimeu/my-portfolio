import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import image from "../../public/images/aleki.jpeg";
import profile from "../../public/images/user.jpg";

import styles from "./Hero.module.css";

const Hero = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<div
					className={styles.content}
					style={{
						border:
							theme === "light"
								? "2px solid rgba(231, 231, 231)"
								: "2px solid #2e313d",
					}}
				>
					<h1 className={styles.title}>Alex Kimeu</h1>
					<h2 className={styles.description}>
						Full Stack Developer in a wild world of dynamic web & native apps.
					</h2>
					<div className={styles.herocta}>
						<h3>Find me online:</h3>
						<Link href="https://twitter.com/alekskimeu">
							<a target="_blank" aria-label="Twitter">
								<i className="fab fa-twitter"></i>
							</a>
						</Link>
						<Link href="https://www.linkedin.com/in/alexkimeu/">
							<a target="_blank" aria-label="LinkedIn">
								<i className="fab fa-linkedin"></i>
							</a>
						</Link>
						<Link href="https://github.com/alekskimeu">
							<a target="_blank" aria-label="Github">
								<i className="fab fa-github"></i>
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.image}>
					<picture>
						<source media="(max-width:1040px)" srcSet={profile} />
						<Image src={image} alt="Alex Kimeu" className={styles.photo} />
					</picture>
				</div>
			</div>
		</div>
	);
};

export default Hero;
