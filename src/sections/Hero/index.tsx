import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useLayoutEffect, useState, useContext } from "react"

import IconArrowRight from "../../assets/hero_icon-arrow-right.svg"
import HeroScooterMiniBlack from "../../assets/hero_scooter-mini-black.png"

import { Context } from "../../context/ScooterProvider"

export function Hero() {
	const { selectedScooter, setSelectedScooter, scooterList, setInContact } = useContext(Context)
	const [isAnimating, setIsAnimating] = useState(0)
	const [changeInterval, setChangeInterval] = useState(0)

	useLayoutEffect(() => {
		if (!!isAnimating) return

		gsap.to(
			".hero__content__subtitle,.hero__content__title,.hero__content__description,.hero__content__value, .hero__content__selection ",
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				stagger: 0.1,
				delay: 0.32,
			}
		)
		gsap.to(".hero__content__selection__indicators span", {
			scale: 1,
			duration: 1,
			delay: 1,
			ease: "elastic.out(1, 0.3)",
		})
		gsap.to(".hero__content__value__cta__icon img", {
			x: "200%",
			repeat: -1,
			duration: 1,
			ease: "back.inOut(1.7)",
		})
		gsap.fromTo(
			".hero__image__figure",
			{
				x: "100%",
			},
			{
				autoAlpha: 1,
				x: "0",
				duration: 2,
				ease: "power2.inOut",
			}
		)

		setIsAnimating(1)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!changeInterval) return

		gsap.fromTo(
			".hero__content__selection__scooters__item, .hero__image, .hero__content__subtitle",
			{
				autoAlpha: 0,
				duration: 1,
			},
			{
				autoAlpha: 1,
				ease: "power2.inOut",
				duration: 1,
			}
		)

		setChangeInterval(0)
	}, [changeInterval])

	function handleSetSelectedColor(color: string) {
		setChangeInterval(1)
		setSelectedScooter(color)
	}

	function handleSetInContact() {
		setInContact(true)

		// gsap.fromTo(
		// 	".contacts",
		// 	{
		// 		autoAlpha: 0,
		// 		scale: 0,
		// 	},
		// 	{
		// 		autoAlpha: 1,
		// 		scale: 1,
		// 		duration: 1,
		// 	}
		// )
	}

	return (
		<section className="hero">
			<div className="wrapper">
				<div className="hero__content">
					<h3 className="hero__content__subtitle" onClick={() => setChangeInterval(1)}>
						{selectedScooter} SCOOTER SANY
					</h3>
					<h1 className="hero__content__title">Muito mais que um patinete</h1>

					<p className="hero__content__description">
						Prática e econômica, a scooter é uma ótima opção de mobilidade nos centros
						urbanos. Você economiza e ainda ganha tempo para aproveitar o melhor da
						cidade.
					</p>

					<div className="hero__content__value">
						<p className="hero__content__value__text">
							A partir de <strong>R$ 5.999,00</strong>
						</p>

						<button className="hero__content__value__cta" onClick={handleSetInContact}>
							<span>Comprar Agora</span>

							<figure className="hero__content__value__cta__icon">
								<Image src={IconArrowRight} alt="Ícone de seta" />
								<Image src={IconArrowRight} alt="Ícone de seta" />
							</figure>
						</button>
					</div>

					<div className="hero__content__selection">
						<div className="hero__content__selection__indicators">
							{scooterList.map((item: any) => {
								return (
									<span
										key={item.color}
										className={item.color == selectedScooter ? "active" : ""}
									></span>
								)
							})}
						</div>

						<ul className="hero__content__selection__scooters">
							{scooterList
								.filter((item: any) => {
									return item.color != selectedScooter
								})
								.map((item: any) => {
									return (
										<li
											key={item.color}
											className="hero__content__selection__scooters__item"
										>
											<button
												className="hero__content__selection__scooter__item__button"
												onClick={() => handleSetSelectedColor(item.color)}
											>
												<Image
													src={item.thumbnail}
													alt="Imagem do Scooter"
												/>
											</button>
										</li>
									)
								})}
						</ul>
					</div>
				</div>

				<div className="hero__image">
					<figure className="hero__image__figure">
						<Image
							src={
								scooterList.find((item: any) => {
									return item.color == selectedScooter
								}).cover
							}
							alt="Scooter ilustrativo semelhante ao produto"
						></Image>
					</figure>
				</div>
			</div>
		</section>
	)
}
