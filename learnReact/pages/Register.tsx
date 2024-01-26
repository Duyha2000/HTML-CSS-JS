import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.scss";
const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const naviage = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Gọi API để đăng ký
    axios
      .post("https://api-ecom.duthanhduoc.com/register", { email, password })
      .then((response: AxiosResponse) => {
        console.log(response);
        (event.target as HTMLFormElement).reset();
        setEmail("");
        setPassword("");
        toast.success("Đăng ký thành công");
        naviage("/login");
      })
      .catch((error) => {
        console.dir(error.response.data.data?.email, "xxx");
        setErrorEmail(error.response.data.data?.email);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Register</h2>
      <div className="field">
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          placeholder="Enter your email:"
          id="email"
          onChange={handleEmailChange}
        />
        {errorEmail && (
          <p
            style={{
              color: "red",
            }}
          >
            {errorEmail}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="password">Enter your password:</label>
        <input
          type="password"
          placeholder="Enter your password:"
          id="password"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit Form</button>
      <p>
        You already have an account? <Link to={"/login"}>Click me!</Link>
      </p>
    </form>
  );
};

export default Register;
