import { useState } from "react";
import "./App.css";

function App() {
	const [number, setNumber] = useState(0);

	const boxStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		height: "100vh",
	};

	const p = {
		fontSize: "2rem",
		color: "Blue",
	};

	function increment() {
		setNumber(number + 1);
	}

	function decrement() {
		if (number > 0) {
			setNumber(number - 1);
		}
	}

	return (
		<div className="box" style={boxStyle}>
			<p style={p}>{number}</p>
			<div>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	);
}

export default App;
