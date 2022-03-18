import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import image from "../../public/images/profile.jpg";

import styles from "./Hero.module.css";

// How to leave your 9-5 with class & dignity

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
								? "1px solid #BB6464"
								: "1px solid rgba(231, 231, 231, .5)",
					}}
				>
					<div className={styles.header}>
						<h1 className={styles.title}>Hello, World 👋</h1>
						<div
							className={styles.image}
							style={{
								border:
									theme === "light" ? "2px solid #BB6464" : "2px solid white",
							}}
						>
							<Image
								src={image}
								alt="Alex Kimeu"
								className={styles.photo}
								layout="responsive"
							/>
						</div>
					</div>
					<h2 className={styles.description}>
						I&#39;m <span className={styles.name}>Alex Kimeu</span>, a
						Passionate Software Developer with 3+ years of progressive
						experience in creating impactful solutions with technology. It&#39;s
						amazing that we live in an age where we can make many possibilities
						with technology, & I&#39;m ready to collaborate with other
						developers in my career to develop solutions geared to accelerate
						business processes.
						<br />
						Get in touch!
					</h2>
					<div className={styles.herocta}>
						<div className={styles.socialMedia}>
							<Link href="https://twitter.com/alekskimeu" aria-label="Twitter">
								<a
									target="_blank"
									style={{ color: theme === "light" ? "#BB6464" : "white" }}
								>
									<i className="fab fa-twitter"></i>
								</a>
							</Link>
							<Link
								href="https://www.linkedin.com/in/alexkimeu/"
								aria-label="LinkedIn"
							>
								<a
									target="_blank"
									style={{ color: theme === "light" ? "#BB6464" : "white" }}
								>
									<i className="fab fa-linkedin"></i>
								</a>
							</Link>
							<Link href="https://github.com/alekskimeu" aria-label="Github">
								<a
									target="_blank"
									style={{ color: theme === "light" ? "#BB6464" : "white" }}
								>
									<i className="fab fa-github"></i>
								</a>
							</Link>
						</div>
						<a
							href="#"
							className={styles.btnDownload}
							style={{
								border:
									theme === "light" ? "2px solid #BB6464" : "2px solid white",
								color: theme === "light" ? "#BB6464" : "white",
							}}
						>
							Download CV <i className="fas fa-download"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
