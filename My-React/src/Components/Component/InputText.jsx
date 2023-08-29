import React from "react";

const InputText = (props) => {
	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">{props.label}</span>
			</label>
			<input
				className="input input-bordered w-full max-w-xs"
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
				required
			/>
		</div>
	);
};

export default InputText;
