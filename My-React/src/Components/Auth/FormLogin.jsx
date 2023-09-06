import React, { useState } from "react";
import InputText from "../Component/InputText";
import Logo from "../../assets/logo.png";
import MyButton from "../Component/MyButton";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const Clicked = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="login-container">
        <div className="tittle-login">Login Page</div>
        <img src={Logo} className="logo" alt="Logo"></img>
        <InputText
          label="Username"
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputText
          label="Password"
          value={password}
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton
          onClick={() => Clicked()}
          className="btn btn-active btn-warning"
          name="Login"
          id="btn-login"
        />
      </div>
    </>
  );
};

export default FormLogin;
