import React from "react";
import "./emailWizard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EmailModal from "../EmailModal/EmailModal";
import LoadingSpinner from "../Components/LoadingSpinner";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";
const EmailWizard = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [fetchedData, setFetchedData] = useState("");
  const [credits, setCredits] = useState(10);
  const cancelHandler = () => {
    setShowModal((prev) => !prev);
  };
  const addNewIdentityHandler = () => {
    setShowModal((prev) => !prev);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const info = await axios.get("/info", {
          headers: { Accept: "application/json" },
        });
        setFetchedData(info.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  console.log(fetchedData);
  const clickHandler = () => {
    history.push("/input");
  };
  const newEmailHandler = () => {
    setCredits((prev) => prev - 1);
  };
  return (
    <>
      <Navbar value={credits} onClick={newEmailHandler} />
      <div className="newWizard">
        <div className="workFlow">
          <div className="first">
            <span className="intro">Who we are</span>
            <span className="ques2">What are we pitching?</span>
          </div>
          <div className="img">
            <img
              src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
              alt=""
              className="rightImage"
            />
          </div>
          <div className="second">
            <span className="intro">Goal</span>
            <span className="ques2">What should this email lead to?</span>
          </div>
          <div className="img">
            <img
              src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
              alt=""
              className="rightImage"
            />
          </div>
          <div className="third">
            <span className="intro">personalization type</span>
            <span className="ques2">single or bulk campaign</span>
          </div>
        </div>
        <div className="selectionArea">
          {showModal && (
            <EmailModal onCancel={cancelHandler} onClick={newEmailHandler} />
          )}
          {!fetchedData && <LoadingSpinner />}
          <div className="myProfile" onClick={clickHandler}>
            {fetchedData &&
              fetchedData.map((a) => {
                return (
                  <div className="profile">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                      alt=""
                    />
                    <span>{a.company}</span>
                  </div>
                );
              })}
          </div>
          <div className="button">
            <button onClick={addNewIdentityHandler} className="btn">
              Add New Identity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailWizard;
