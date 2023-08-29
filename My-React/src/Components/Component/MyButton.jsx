import React from "react";

function MyButton(props) {
	return (
		<>
			<button
				onClick={() => props.clicked}
				className={props.className}
				id={props.id}
			>
				{props.name}
			</button>
		</>
	);
}
export default MyButton;
