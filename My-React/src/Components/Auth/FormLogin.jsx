import React, { useState } from "react";
import InputText from "../Component/InputText";
import Logo from "../../assets/logo.png";
import MyButton from "../Component/MyButton";

const FormLogin = () => {
	const email = useState("");
	const password = useState("");
	const Clicked = () => {
		return alert("Login");
	};
	return (
		<>
			<div className="login-container">
				<div className="tittle-login">Login Page</div>
				<img src={Logo} className="logo"></img>
				<InputText
					label="Email"
					// value={email}
					type="email"
					placeholder="example@mail.com"
				/>
				<InputText
					label="Password"
					// value={password}
					type="password"
					placeholder="*********"
				/>
				<MyButton
					clicked={Clicked}
					className="btn btn-active btn-warning"
					name="Login"
					id="btn-login"
				/>
			</div>
		</>
	);
};

export default FormLogin;
