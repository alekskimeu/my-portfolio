import { useEffect } from "react";
import Service from "../Service/Service";

import AOS from "aos";
import "aos/dist/aos.css";
import { servicesData } from "../../data/services/servicesData";

import styles from "./Services.module.css";

const Services = () => {
	useEffect(() => {
		AOS.init();
	});
	return (
		<div className={styles.services}>
			<div className="container">
				<div
					className="section-header"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="heading">Services</h1>
					<h2 className="subheading">Need any of these services?</h2>
				</div>
				<div className={styles.servicesWrapper}>
					{servicesData.map((service) => (
						<Service key={service.index} service={service} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
