import Head from "next/head";

import { FeaturedPosts, HeroImage, Posts } from "../components";
import { Hero } from "../components";

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Alex Kimeu | Software Engineer (React, Next, React Native, Node)
				</title>
				<meta
					name="description"
					content="Software Developer: I create with cool people 👨‍💻."
				/>
				<meta name="keywords" content="Alex Kimeu, Software Developer" />
			</Head>
			<main className={styles.home}>
				<HeroImage />
			</main>
		</>
	);
}
