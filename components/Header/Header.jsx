import Link from "next/link";
import { useTheme } from "next-themes";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import styles from "./Header.module.css";

const Header = () => {
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
					<a className={styles.logo}>AK</a>
				</Link>
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

				<div className={styles.toggle}>
					{theme === "light" ? (
						<DarkModeIcon
							className={styles.themeToggle}
							style={{ color: "#2e313d" }}
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
