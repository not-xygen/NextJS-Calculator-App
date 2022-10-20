import { Dispatch, SetStateAction, createContext, useState } from "react"

interface ResultState {
	lastCounter: string
	setLastCounter: Dispatch<SetStateAction<string>>
	operation: string
	setOperation: Dispatch<SetStateAction<string>>
	currentCounter: string
	setCurrentCounter: Dispatch<SetStateAction<string>>
}

const ResultContext = createContext<ResultState>({
	lastCounter: "",
	setLastCounter: () => 0,
	operation: "",
	setOperation: () => 0,
	currentCounter: "",
	setCurrentCounter: () => 0,
})

const ResultProvider = ({ children }: any) => {
	const [lastCounter, setLastCounter] = useState<string>("")
	const [operation, setOperation] = useState<string>("")
	const [currentCounter, setCurrentCounter] = useState<string>("0")

	return (
		<ResultContext.Provider
			value={{
				lastCounter,
				setLastCounter,
				operation,
				setOperation,
				currentCounter,
				setCurrentCounter,
			}}
		>
			{children}
		</ResultContext.Provider>
	)
}

export { ResultContext, ResultProvider }
