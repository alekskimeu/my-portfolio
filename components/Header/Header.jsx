import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<h1 className="logo">AK</h1>
				<div className={styles.menu}>
					<Link href="/">
						<a>Home</a>
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
