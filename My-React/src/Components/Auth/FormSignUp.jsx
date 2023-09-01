import React, { useState } from "react";
import InputText from "../Component/InputText";
import Logo from "../../assets/logo.png";
import MyButton from "../Component/MyButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormSignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
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

	const Register = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8080/api/users",
				JSON.stringify(formData),
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				alert("Registration Successful");
				console.log("Register Success");
				console.log("Data sent:", formData);
				navigate("/");
			} else {
				console.log("Registration Failed");
			}
		} catch (error) {
			if (error.response) {
				console.log("Server responded with:", error.response.status);
			} else {
				console.log("Error sending request:", error.message);
			}
		}
	};
	return (
		<>
			<form onSubmit={Register}>
				<div className="login-container">
					<div className="tittle-sign-up">Register</div>
					<img src={Logo} className="logo" alt="Logo" />
					<InputText
						label="Name"
						value={formData.name}
						type="text"
						name="name"
						onChange={handleChanger}
						placeholder="name"
					/>
					<InputText
						label="Username"
						value={formData.username}
						type="text"
						name="username"
						onChange={handleChanger}
						placeholder="username"
					/>
					<InputText
						label="Password"
						value={formData.password}
						type="password"
						name="password"
						onChange={handleChanger}
						placeholder="*********"
					/>
					<MyButton
						type="submit"
						className="btn btn-active btn-warning"
						name="Sign Up"
						id="btn-sign-up"
					/>
				</div>
			</form>
		</>
	);
};

export default FormSignUp;
