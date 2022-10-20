import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Calculator from "../components/calculator"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Xploratech | Calculator</title>
			</Head>
			<div className="flex justify-center items-center">
				<Calculator />
			</div>
		</>
	)
}

export default Home
