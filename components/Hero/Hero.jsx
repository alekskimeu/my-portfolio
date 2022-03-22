import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import image from "../../public/images/profile.jpg";

import styles from "./Hero.module.css";

// How to leave your 9-5 with class & dignity
// TODO: Get in touch, Social icons & photo on one side. Content on the other
const Hero = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className={styles.hero}>
			<div
				className={styles.container}
				style={{
					border:
						theme === "light"
							? "1px solid #BB6464"
							: "1px solid rgba(231, 231, 231, .5)",
				}}
			>
				<div className={styles.content}>
					<h1 className={styles.title}>Hello, World 👋</h1>

					<p className={styles.description}>
						I&#39;m a passionate Software Developer with 3+ years of progressive
						experience in creating impactful solutions with technology.
					</p>
					<p className={styles.description}>
						{" "}
						Apart from coding & learning new techs, I write about tech in my{" "}
						<Link href="/blog">
							<a>blog</a>
						</Link>{" "}
						& about general life stuff on{" "}
						<a href="#" target="_blank">
							BDADG
						</a>
					</p>

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
				<div className={styles.image}>
					<Image
						src={image}
						alt="Alex Kimeu"
						className={styles.photo}
						layout="responsive"
					/>
					<h1 className={styles.name}>Alex Kimeu</h1>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
