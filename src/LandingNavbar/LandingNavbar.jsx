import React from "react";
import "./landingNavbar.css";
import { signInWithGoogle } from "../Login/firebase";
import { useHistory } from "react-router-dom";
const LandingNavbar = (props) => {
  const history = useHistory();
  const signInHandler = () => {
    props.onLogin();
  };

  return (
    <div className="elements">
      <div className="header">
        <img
          src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
          alt=""
        />
        <div className="logo">React AI</div>
      </div>
      <div className="authentication">
        <button className="signin" onClick={signInHandler}>
          Sign In
        </button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
};

export default LandingNavbar;
