import { useState } from "react";
import "../styles/button.css";

function Button(props) {
	const [count, setCount] = useState(0);
	return (
		<button onClick={() => setCount(count + 1)} className="btn btn-white">
			{`${props.text} : ${count}`}
		</button>
	);
}

export default Button;
