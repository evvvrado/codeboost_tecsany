import { Html, Head, Main, NextScript } from "next/document"

function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Epilogue:wght@400;500&family=Manrope:wght@600&family=Syne&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
