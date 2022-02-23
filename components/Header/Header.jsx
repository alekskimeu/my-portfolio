import React, { useState } from "react";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import styles from "./Header.module.css";

const Header = ({ isLight, changeTheme }) => {
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
				<div className={styles.toggle} onClick={changeTheme}>
					{isLight ? (
						<DarkModeIcon className={styles.themeToggle} />
					) : (
						<LightModeIcon
							className={styles.themeToggle}
							style={{ color: "gold" }}
						/>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
