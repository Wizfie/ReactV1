import React, { useState } from "react";
import InputText from "../Component/InputText";
import Logo from "../../assets/logo.png";
import MyButton from "../Component/MyButton";
import axios from "axios";

const FormLogin = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChanger = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const Login = async (event) => {
		event.preventDefault();
		// console.log(formData);

		const response = await axios
			.post("http://localhost:8080/api/auth/login", JSON.stringify(formData), {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
		// try {
		// console.log(response);

		// 	// if (response.status === 200) {
		// 	// 	const data = response.data;
		// 	// 	console.log(data);
		// 	// 	// localStorage.setItem("token", data.token);
		// 	// 	// localStorage.setItem("token", data.expiredAt);
		// 	// }
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<>
			<form onSubmit={Login}>
				<div className="login-container">
					<div className="tittle-login">Login Page</div>
					<img src={Logo} className="logo"></img>
					<InputText
						label="Username"
						value={formData.username}
						name="username"
						type="text"
						onChange={handleChanger}
						placeholder="Username"
					/>
					<InputText
						label="Password"
						value={formData.password}
						name="password"
						type="password"
						onChange={handleChanger}
						placeholder="*********"
					/>
					<MyButton
						className="btn btn-active btn-warning"
						name="Login"
						id="btn-login"
					/>
				</div>
			</form>
		</>
	);
};

export default FormLogin;
