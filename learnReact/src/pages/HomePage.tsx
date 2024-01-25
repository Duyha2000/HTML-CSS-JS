import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
    // window.location.href = "/about";
  };
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/about">Chuyển sang trang about</Link>
      <button onClick={handleAbout}>Chuyển sang about</button>
    </div>
  );
};

export default HomePage;
