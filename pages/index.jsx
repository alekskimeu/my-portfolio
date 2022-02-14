import Head from 'next/head'

import { Hero, Posts, Skills } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Alex Kimeu - Homepage </title>
				<meta
					name="description"
					content="Software Developer | Limitless learner | Blogger"
				/>
			</Head>
			<main>
				<Hero />
				<Skills />
				{/* <Projects /> */}
				<Posts />
			</main>
		</>
	);
}
