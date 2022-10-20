import KeyGrid from "./KeyGrid"
import { useContext } from "react"
import { ResultContext } from "../../context/ResultContext"

const Calculator = () => {
	const { currentCounter, operation, lastCounter } = useContext(ResultContext)

	return (
		<div className="flex flex-col text-white bg-slate-800 p-6 rounded-2xl">
			<h1 className="p-2 font-black">Calc</h1>
			<div className=" flex flex-col justify-center items-end px-6 h-20 bg-slate-700 text-3xl font-bold rounded-xl">
				<div className="text-xl transition-all ease-in-out">
					{lastCounter}
					{operation}
				</div>
				<div>{currentCounter}</div>
			</div>
			<KeyGrid />
		</div>
	)
}

export default Calculator
