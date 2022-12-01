import Head from "next/head"
import { definition } from "../classes/definition"

interface IPageTitle {
	title: string
	description: string
}

export function PageTitle({ title, description }: IPageTitle) {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

			<meta name="description" content={definition.description} />
			<meta property="og:description" content={definition.description} />
			<meta name="keywords" content={definition.keywords} />
			<meta name="author" content="evvvrado" />

			<meta property="og:title" content={definition.title} />
			<meta property="og:site_name" content={definition.title} />
			<meta property="og:image" content="/_og.jpg" />
			<meta property="og:image:secure_url" content="/_og.jpg" />
			<meta property="og:image:type" content="png" />
			<meta property="og:image:alt" content="Representação visual" />
			<meta property="og:url" content={definition.url} />
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content="website" />

			<meta name="twitter:title" content={definition.title} />
			<meta name="twitter:description" content={definition.description} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:image" content="/_og.jpg" />
			<meta name="twitter:image:alt" content="Representação visual" />

			<meta name="theme-color" content={definition.theme} />
			<meta name="msapplication-navbutton-color" content={definition.theme} />
			<meta name="apple-mobile-web-app-status-bar-style" content={definition.theme} />

			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />

			<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff"></meta>

			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	)
}
