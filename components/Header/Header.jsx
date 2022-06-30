import Link from "next/link";

import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.menu}>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<a href="https://medium.com/@alexkimeu" target="_blank" rel="noreferrer">
					Blog
				</a>
			</nav>
		</header>
	);
};

export default Header;
