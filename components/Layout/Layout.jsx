import Head from "next/head";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=7" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
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
