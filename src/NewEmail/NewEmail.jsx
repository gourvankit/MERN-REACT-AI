import React from "react";
import "./newEmail.css";
import { useHistory } from "react-router-dom";
const NewEmail = () => {
  const history = useHistory();
  const creteNewButtonHandler = () => {
    history.push("/wizard");
  };
  return (
    <>
      <div className="newEmail">
        <span className="email">Create New Email</span>
        <span className="description">
          Let's help you build a high-converting email using 1-1 personalized
          info
        </span>
        <button className="create" onClick={creteNewButtonHandler}>
          <span className="buttonText">Create New Email</span>
        </button>
      </div>
    </>
  );
};

export default NewEmail;
