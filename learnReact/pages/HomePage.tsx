import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
    // window.location.href = "/about";
  };
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") ?? ""
  );
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken("");
    axios
      .post("https://api-ecom.duthanhduoc.com/logout", null, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(() => {
        toast.success("Đăng xuất thành công");
      });
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/about">Chuyển sang trang about</Link>
      <button onClick={handleAbout}>Chuyển sang about</button>

      {token ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default HomePage;
