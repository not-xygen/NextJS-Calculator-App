import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ResultProvider } from "../context/ResultContext"
ResultProvider

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ResultProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ResultProvider>
	)
}

export default MyApp
