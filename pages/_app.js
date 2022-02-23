import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
