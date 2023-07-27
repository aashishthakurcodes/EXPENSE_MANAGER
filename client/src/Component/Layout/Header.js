import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import './Header.css'
import img3 from '../../Images/images.png'

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <div>
      <nav className="main">
    
        <div className="logo-container"><img className="logo" src={img3} alt="logo"/></div>

        <div>
        <button className="logout_btn" onClick={logoutHandler}>Logout</button>
        </div>
      </nav>
      {/* <div className="container">
          <span>Welcome {loginUser && loginUser.name}</span>
        </div> */}
    </div>
  );
};

export default Header;
