import { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Contact.module.css";

const Contact = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div className={styles.contact} data-aos="fade-up" data-aos-duration="1000">
			<div className="container">
				<div className={styles.customHeader}>
					<h1 className={styles.heading}>Wanna Work with me?</h1>
					<p className={styles.description}>
						I&#39;m available for freelance projects. <br />
						Shoot me an email
					</p>
				</div>
				<Link href="mailto:kimeualeks@gmail.com">
					<a className={styles.btnMail}>
						Email me<i className="fas fa-paper-plane"></i>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
