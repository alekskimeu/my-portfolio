import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./Header.module.css";

const Header = ({ isLight, changeTheme }) => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const { theme, setTheme } = useTheme();

	return (
		<header
			className={styles.header}
			style={{
				background: theme === "light" ? "#ffffff" : "#121212",
				borderBottom:
					theme === "light"
						? "1px solid rgb(231, 231, 231)"
						: "1px solid #2e313d",
			}}
		>
			<nav className={styles.navbar}>
				<Link href="/">
					<a className="logo">AK</a>
				</Link>
				<div
					className={styles.menu}
					style={{ right: mobileMenu ? 0 : "-100%" }}
				>
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
				<div className={styles.menuIcon}>
					{mobileMenu ? (
						<CloseIcon onClick={() => setMobileMenu(false)} />
					) : (
						<MenuIcon onClick={() => setMobileMenu(true)} />
					)}
				</div>
				<div className={styles.toggle}>
					{theme === "light" ? (
						<DarkModeIcon
							className={styles.themeToggle}
							onClick={() => setTheme("dark")}
						/>
					) : (
						<LightModeIcon
							className={styles.themeToggle}
							style={{ color: "gold" }}
							onClick={() => setTheme("light")}
						/>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
