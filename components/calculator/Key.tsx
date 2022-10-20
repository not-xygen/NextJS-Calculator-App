import { useState, useContext } from "react"
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
			case ".":
				handleDotValue()
				break
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

	const handleDotValue = () => {
		if (currentCounter.includes(".") === false) {
			setCurrentCounter(currentCounter + ".0")
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
		if (currentCounter.length > 1) {
			if (currentCounter !== "0" && currentCounter !== "Invalid Input") {
				setCurrentCounter(currentCounter.slice(0, -1))
			} else {
				setCurrentCounter("0")
			}
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
		if (
			currentCounter.substring(
				currentCounter.length,
				currentCounter.length - 2
			) === ".0"
		) {
			return setCurrentCounter(
				currentCounter.substring(0, currentCounter.length - 1) + val
			)
		}
		if (currentCounter === "0") {
			return setCurrentCounter(val)
		}
		if (currentCounter !== "Invalid Input") {
			return setCurrentCounter(currentCounter + val)
		} else {
			return setCurrentCounter(val)
		}
	}
	console.log()

	let style = " "

	switch (value) {
		case "reset":
			style += "col-span-2 bg-red-700"
			break
		case "=":
			style += "col-span-2 bg-blue-400"
			break
		case "delete":
			style += "bg-red-700"
			break
		default:
			style += "bg-orange-200"
			break
	}

	return (
		<button
			type="button"
			onClick={handleKeyClick}
			className={
				"p-3 sm:p-6 text-sm sm:text-xl text-center font-bold rounded-xl cursor-pointer select-none hover:bg-opacity-60 hover:drop-shadow-1xl transition-all ease-in-out" +
				style
			}
		>
			{title}
		</button>
	)
}

export default Key
