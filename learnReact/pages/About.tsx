import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <Link to="/">Go to HomePage</Link>
      <button onClick={handleHomePage}>Go to Home Page</button>
    </div>
  );
};

export default About;
