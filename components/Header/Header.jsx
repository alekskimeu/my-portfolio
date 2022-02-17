import React, { useState } from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<h1 className="logo">AK</h1>
				<div
					className={styles.menu}
					style={{ right: mobileMenu ? 0 : "-100%" }}
				>
					<Link href="/">
						<a onClick={() => setMobileMenu(false)}>Home</a>
					</Link>
					<Link href="/projects">
						<a onClick={() => setMobileMenu(false)}>Projects</a>
					</Link>
					<Link href="/blog">
						<a onClick={() => setMobileMenu(false)}>Blog</a>
					</Link>
				</div>
				<div className={styles.menuIcon}>
					{mobileMenu ? (
						<i
							className="fas fa-close"
							onClick={() => setMobileMenu(false)}
						></i>
					) : (
						<i className="fas fa-bars" onClick={() => setMobileMenu(true)}></i>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
