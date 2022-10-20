import Key from "./Key"

export const keys = [
	{ title: "7", value: "7" },
	{ title: "8", value: "8" },
	{ title: "9", value: "9" },
	{ title: "DEL", value: "delete" },
	{ title: "4", value: "4" },
	{ title: "5", value: "5" },
	{ title: "6", value: "6" },
	{ title: "+", value: "+" },
	{ title: "1", value: "1" },
	{ title: "2", value: "2" },
	{ title: "3", value: "3" },
	{ title: "-", value: "-" },
	{ title: ".", value: "." },
	{ title: "0", value: "0" },
	{ title: "/", value: "/" },
	{ title: "x", value: "*" },
	{ title: "RESET", value: "reset" },
	{ title: "=", value: "=" },
]

const KeyGrid = () => {
	return (
		<div className="grid grid-cols-4 gap-5 p-4">
			{keys.map((key, index) => {
				return <Key key={index} title={key.title} value={key.value} />
			})}
			{/* <div className="col-span-2 p-6 text-xl text-center font-bold bg-orange-200 rounded-xl">
				RESET
			</div>
			<div className="col-span-2 p-6 text-xl text-center font-bold bg-orange-200 rounded-xl">
				=
			</div> */}
		</div>
	)
}

export default KeyGrid
