import { useState } from "react";
import "../styles/button.css";

function Button(props) {
	const [count, setCount] = useState(0);
	return (
		<button
			onClick={() => {
				setCount(count + 1);
				console.log("test");
			}}
			className="btn btn-white"
		>
			{" "}
			<pre>{`${props.text} : ${count}`}</pre>
		</button>
	);
}

export default Button;
