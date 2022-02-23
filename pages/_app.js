import { useState } from "react";
import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [isLight, setIsLight] = useState(true);

	const changeTheme = () => {
		setIsLight(!isLight);
	};

	return (
		<Layout isLight={isLight} changeTheme={changeTheme}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
