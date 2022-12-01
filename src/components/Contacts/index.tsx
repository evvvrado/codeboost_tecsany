import { useContext } from "react"
import Image from "next/image"

import { Context } from "../../context/ScooterProvider"
import { Input } from "../Form/Input"
import LogoTecsany from "../../assets/header_logo-alternative.svg"
import gsap from "gsap"

export function Contacts() {
	const { setInContact } = useContext(Context)

	function handleSetInContact() {
		setInContact(false)
	}

	return (
		<div className="contacts">
			<div className="container">
				<div className="wrapper">
					<div className="contacts__alternative-header">
						<div className="contacts__alternative-header__logo">
							<Image
								src={LogoTecsany}
								alt="Logo Tecsany"
								width={166.93}
								height={48}
							/>
						</div>

						<button
							className="contacts__alternative-header__close"
							onClick={handleSetInContact}
						>
							Fechar x
						</button>
					</div>

					<h3 className="contacts__subtitle">5 PASSOS PARA EFETUAR A COMPRA</h3>
					<h2 className="contacts__title">Faça contato para comprar</h2>

					<form action="" className="contacts__form">
						<Input title="Seu nome" type="text" placeholder="Digite aqui seu nome" />
						<Input title="Seu email" type="email" placeholder="Digite aqui seu email" />
						<Input title="Seu telefone" type="tel" placeholder="+55 _ ___-____" />

						<button className="contacts__form__button">Ir para o próximo passo</button>
					</form>

					<p className="contacts__description">
						Seus dados estão seguros, esse processo é para que nosso time entre em
						contato e feche a compra passo a passo com você. 100% seguro e fácil.
					</p>
				</div>
			</div>
		</div>
	)
}
