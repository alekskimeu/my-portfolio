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
					<h1 className={styles.title}>Hello World 👋</h1>
					<p className={styles.description}>
						My name is <span>Alex Kimeu</span>. I'm a passionate{" "}
						<span>Developer</span> in love with JAMstack. I enjoy learning &
						creating solutions using code. I'm interested in Web3 & Blockchain
						technology.
						<br />
						If any of these interests you too, I'd love to chat! <br />
						Let's connect, shall we?
					</p>
					<div className={styles.herocta}>
						<h2>Find me online:</h2>
						<Link href="/">
							<a>
								<Image
									src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
									alt="Github"
									width="40"
									height="40"
								/>
							</a>
						</Link>
						<Link href="/">
							<a>
								<Image
									src="https://avatars.githubusercontent.com/u/357098?s=200&v=4"
									alt="Github"
									width="40"
									height="40"
								/>
							</a>
						</Link>
						<Link href="/">
							<a>
								<Image
									src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/twitter/twitter.png"
									alt="Github"
									width="40"
									height="40"
								/>
							</a>
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
