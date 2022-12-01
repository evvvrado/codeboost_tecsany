import type { AppProps } from "next/app"
import { ScooterProvider } from "../context/ScooterProvider"
import "../style.css"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ScooterProvider>
			<Component {...pageProps} />{" "}
		</ScooterProvider>
	)
}
