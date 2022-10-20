import { useContext } from "react"
import { ResultContext } from "../../context/ResultContext"

const Key = ({ title, value }: any) => {
	const {
		lastCounter,
		setLastCounter,
		operation,
		setOperation,
		currentCounter,
		setCurrentCounter,
	} = useContext(ResultContext)

	const handleKeyClick = () => {
		switch (value) {
			case "+":
				handleOperation(value)
				break
			case "-":
				handleOperation(value)
				break
			case "/":
				handleOperation(value)
				break
			case "*":
				handleOperation(value)
				break
			case "=":
				handleResult()
				break
			case "delete":
				handleDelete()
				break
			case "reset":
				handleReset()
				break
			default:
				handleDefaultValue(value)
				break
		}
	}

	const handleOperation = (val: string) => {
		if (currentCounter !== "0") {
			setLastCounter(currentCounter)
			setOperation(" " + val + " ")
			setCurrentCounter("0")
		}
	}

	const handleResult = () => {
		try {
			setCurrentCounter(
				eval(lastCounter + operation + currentCounter).toString()
			)
			setLastCounter("")
			setOperation("")
		} catch (err) {
			setCurrentCounter("Invalid Input")
			setLastCounter("")
			setOperation("")
		}
	}

	const handleDelete = () => {
		if (currentCounter !== "Invalid Input") {
			setCurrentCounter(currentCounter.slice(0, -1))
		} else {
			setCurrentCounter("0")
		}
	}

	const handleReset = () => {
		setLastCounter("")
		setOperation("")
		setCurrentCounter("0")
	}

	const handleDefaultValue = (val: string) => {
		if (currentCounter === "0") {
			return setCurrentCounter(val)
		}
		if (currentCounter !== "Invalid Input") {
			return setCurrentCounter(currentCounter + val)
		} else {
			return setCurrentCounter(val)
		}
	}

	let style = ""

	switch (value) {
		case "=":
			style += " col-span-2 bg-blue-400"
		case "reset":
			style += " col-span-2 bg-red-700"
		case "delete":
			style += " bg-red-700"
		default:
			style += " bg-orange-200"
	}

	return (
		<div
			onClick={handleKeyClick}
			className={
				"p-3 sm:p-6 text-sm sm:text-xl text-center font-bold rounded-xl cursor-pointer select-none hover:bg-opacity-60 hover:drop-shadow-1xl transition-all ease-in-out" +
				style
			}
		>
			{title}
		</div>
	)
}

export default Key
