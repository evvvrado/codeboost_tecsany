import { Header } from "../components/Header"
import { PageTitle } from "../components/PageTitle"
import { Hero } from "../sections/Hero"
import { useContext } from "react"
import { Context } from "../context/ScooterProvider"
import { Showcase } from "../sections/Showcase"
import { Contacts } from "../components/Contacts"

export default function Home() {
	const { selectedScooter, inContact } = useContext(Context)

	return (
		<div data-theme={selectedScooter}>
			<PageTitle
				title="Tecsany — Muito mais que um patinete"
				description="Prática e econômica, a scooter é uma ótima opção de mobilidade nos centros urbanos. Você economiza e ainda ganha tempo para aproveitar o melhor da cidade."
			/>

			{inContact && <Contacts />}

			<Header />
			<Hero />
			<Showcase />
		</div>
	)
}
