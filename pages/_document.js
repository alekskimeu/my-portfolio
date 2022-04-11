import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-KLHWXZG"
					height="0"
					width="0"
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
