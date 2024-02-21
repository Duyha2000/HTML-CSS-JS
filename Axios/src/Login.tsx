import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api-ecom.duthanhduoc.com/login",
        {
          email,
          password,
        }
      );
      const data = response.data.data.access_token;

      localStorage.setItem("token", data);
      navigate("/");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
