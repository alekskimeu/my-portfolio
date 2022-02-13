import Head from 'next/head'

import { Hero, Posts, Skills } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Alex Kimeu</title>
				<meta
					name="description"
					content="Software Dev | Limitless learner | Blogger"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Hero />
				<Skills />
				<Posts />
			</main>
		</>
	);
}
