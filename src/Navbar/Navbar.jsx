import React from "react";
import "./navbar.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useHistory } from "react-router-dom";
const Navbar = (props) => {
  const history = useHistory();
  const headerClickHandler = () => {
    history.push("/");
  };
  const logoutHandler = () => {
    localStorage.removeItem("email");
    history.push("/");
  };
  return (
    <>
      <div className="elements">
        <div className="initial">
          <img
            src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
            alt=""
          />
          <div className="logo" onClick={headerClickHandler} type="button">
            React AI
          </div>
        </div>

        <div className="objects">
          <div className="bunch1">
            <EmailOutlinedIcon />
            <span className="emailText">Email</span>
          </div>
          <div className="bunch2">
            <CampaignOutlinedIcon />
            <span className="campaigns">Campaigns</span>
          </div>
          <div className="bunch3">
            <InfoOutlinedIcon />
            <span className="help">Help</span>
          </div>
        </div>
        <div className="logout">
          <button onClick={logoutHandler}>
            <span className="logoutButton">Logout</span>
          </button>
        </div>
        <div className="btn">
          <button className="credits">
            <span>{props.value}</span>
            <span> credits- upgrade now</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
