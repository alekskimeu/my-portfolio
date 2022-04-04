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
				{
						(
						function(w,d,s,l,i){w[l] = w[l] || [];
						w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
						var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
						j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					}
						)
					
						(window,document,'script','dataLayer','GTM-KLHWXZG')
				}
				
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
