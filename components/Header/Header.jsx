import Link from "next/link";

import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<Link href="/">
					<a className={styles.logo}>
						<Image src="/favicon-32x32.png" height="35" width="35" alt="Logo" />
					</a>
				</Link>
				<div className={styles.menu}>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/resume">
						<a>Resume</a>
					</Link>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
