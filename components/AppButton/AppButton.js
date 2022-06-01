import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./AppButton.module.css";

const AppButton = ({ text }) => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<a
			href="https://drive.google.com/uc?export=download&id=1an5BM4BGBz2jUWSc-gu9p2mypI_Hp3Ug"
			className={styles.btn}
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			{text} <i className="fas fa-download"></i>
		</a>
	);
};

export default AppButton;
