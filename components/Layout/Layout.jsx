import Head from "next/head";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=7" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="wrapper">
				<div className="wrap">
					<Header />
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
