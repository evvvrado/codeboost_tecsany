import { createContext, ReactNode, useState } from "react"

import HeroScooterGreen from "../assets/hero_scooter-main-green.png"
import HeroScooterMiniGreen from "../assets/hero_scooter-mini-green.png"

import HeroScooterRed from "../assets/hero_scooter-main-red.png"
import HeroScooterMiniRed from "../assets/hero_scooter-mini-red.png"

import HeroScooterBlack from "../assets/hero_scooter-main-black.png"
import HeroScooterMiniBlack from "../assets/hero_scooter-mini-black.png"

type IScooterProvider = {
	children?: ReactNode | undefined
}

type ScooterProviderType = {
	selectedScooter: String
	setSelectedScooter: any
	scooterList: any
	inContact: Boolean
	setInContact: any
}

const Context = createContext({} as ScooterProviderType)

function ScooterProvider(props: IScooterProvider) {
	const [selectedScooter, setSelectedScooter] = useState("green")
	const [inContact, setInContact] = useState(false)

	const scooterList = [
		{ color: "green", cover: HeroScooterGreen, thumbnail: HeroScooterMiniGreen },
		{ color: "red", cover: HeroScooterRed, thumbnail: HeroScooterMiniRed },
		{ color: "black", cover: HeroScooterBlack, thumbnail: HeroScooterMiniBlack },
	]

	return (
		<Context.Provider
			value={{ selectedScooter, setSelectedScooter, scooterList, inContact, setInContact }}
		>
			{props.children}
		</Context.Provider>
	)
}

export { Context, ScooterProvider }
