import Image from "next/image"

import GifShowcase from "../../assets/showcase_gif.gif"

export function Showcase() {
	return (
		<section className="showcase">
			<div className="wrapper">
				<h3 className="showcase__subtitle">MEIO DE TRANSPORTE INTELIGENTE</h3>
				<h2 className="showcase__title">Velocidade na medida certa</h2>

				<ul className="showcase__infos">
					<li className="showcase__infos__item">25% de economia</li>
					<li className="showcase__infos__item">100% livre de trânsito</li>
					<li className="showcase__infos__item">Painel digital</li>
				</ul>

				<div className="showcase__content">
					<figure className="showcase__content__gif">
						<Image src={GifShowcase} alt="Vídeo ilustrativo" />
					</figure>
				</div>

				<span className="showcase__background"></span>
			</div>
		</section>
	)
}
