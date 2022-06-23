import Head from "next/head";
import { useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SocialIcons from "../SocialIcons/SocialIcons";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				{useEffect(() => {
					(function (w, d, s, l, i) {
						w[l] = w[l] || [];
						w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
						var f = d.getElementsByTagName(s)[0],
							j = d.createElement(s),
							dl = l != "dataLayer" ? "&l=" + l : "";
						j.async = true;
						j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
						f.parentNode.insertBefore(j, f);
					})(window, document, "script", "dataLayer", "GTM-KLHWXZG");
				}, [])}
			</Head>
			<div className="wrapper">
				<div className="wrap">
					<Header />
					{children}
				</div>
				<SocialIcons />

				<Footer />
			</div>
		</>
	);
};

export default Layout;
