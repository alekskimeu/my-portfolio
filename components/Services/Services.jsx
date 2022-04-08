import Service from "../Service/Service";
import styles from "./Services.module.css";

import { servicesData } from "../../data/services/servicesData";

const Services = () => {
	return (
		<div className={styles.services}>
			<div className="container">
				<div className="section-header">
					<h1 className="heading">Services</h1>
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
