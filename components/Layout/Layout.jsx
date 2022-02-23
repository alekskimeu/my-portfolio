import React from "react";
import Head from "next/head";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children, isLight, changeTheme }) => {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=7" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="wrapper">
				<div className="wrap">
					<Header isLight={isLight} changeTheme={changeTheme} />
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
