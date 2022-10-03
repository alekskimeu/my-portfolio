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
				<a
					href="https://medium.com/@alexkimeu"
					target="_blank"
					rel="noreferrer"
				>
					Blog
				</a>
				<a
					href="https://drive.google.com/file/d/1ySdT9nbOvziEmJhZW9wsJ7IPua-6B8vx/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
			</nav>
		</header>
	);
};

export default Header;
