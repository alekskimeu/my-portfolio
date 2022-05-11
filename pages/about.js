import Head from "next/head";
import { AboutInfo, HeroImage } from "../components";


import styles from "../styles/About.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>About | Alex Kimeu</title>
				<meta
					name="description"
					content="Software Developer | Limitless learner | Blogger"
				/>
				<meta name="keywords" content="Alex Kimeu, Software Developer" />
			</Head>
			<main className={styles.about}>
				<HeroImage />
				<AboutInfo />
			</main>
		</>
	);
}
