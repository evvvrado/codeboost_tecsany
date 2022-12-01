import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import gsap from "gsap"

import LogoTecsany from "../../assets/header_logo.svg"
import IconSearch from "../../assets/header_icon-search.svg"
import IconUser from "../../assets/header_icon-user.svg"

export function Header() {
	const navigationLinks = [
		{
			title: "Para Empresas",
			href: "#",
		},
		{
			title: "Para Clientes",
			href: "#",
		},
	]

	useEffect(() => {
		gsap.fromTo(
			"header",
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
				delay: 0.5,
				duration: 1.5,
				ease: "expo.out",
			}
		)
	}, [])

	return (
		<header>
			<div className="wrapper">
				<nav className="header__navigation">
					<figure className="header__navigation__logo">
						<Image src={LogoTecsany} alt="Logo Tecsany" width={166.93} height={48} />
					</figure>

					<ul className="header__navigation__links">
						{navigationLinks.map(({ title, href }) => {
							return (
								<li className="header__navigation__links__link" key={title}>
									<Link href={href}>
										{title.split(" ").map((splited, index) => {
											return <span key={index}>{splited}</span>
										})}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>

				<div className="header__actions">
					<button className="header__actions__search" title="Função inabilitada">
						<Image src={IconSearch} alt="Ícone de pesquisa" width={22} height={22} />
					</button>

					<button className="header__actions__login" title="Função inabilitada">
						<Image src={IconUser} alt="Ícone de usuário" width={24} height={24} />
						<span className="header__actions__login__text">Fazer Login</span>
					</button>
				</div>
			</div>
		</header>
	)
}
