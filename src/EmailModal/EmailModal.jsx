import React from "react";
import "./emailModal.css";
import { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const EmailModal = (props) => {
  const nameRef = useRef();
  const websiteRef = useRef();
  const descriptionRef = useRef();
  const cancelHandler = () => {
    props.onCancel();
  };
  const submitHandler = () => {
    props.onClick();
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    let ref = {
      company: nameRef.current.value,
      website: websiteRef.current.value,
      goal: descriptionRef.current.value,
    };
    const res = axios({
      method: "post",
      url: "/add",
      data: ref,
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="modelOverlay">
      <div className="modalContainer">
        <div className="inputText">
          <span className="headingPitching">What are we pitching?</span>
        </div>
        <span className="subheading">
          This teaches our AI about your company
        </span>
        <div className="inputForm">
          <form onSubmit={formSubmitHandler}>
            <div className="inputName">
              <span>Company Name</span>
              <input type="text" placeholder="Company Name" ref={nameRef} />
            </div>
            <div className="inputName">
              <span>Website</span>
              <input type="text" placeholder="Website" ref={websiteRef} />
            </div>
            <div className="inputName">
              <span>Description</span>
              <input
                type="text"
                placeholder="Description"
                ref={descriptionRef}
              />
            </div>
            <div className="buttonsEmail">
              <button className="submit" onSubmit={submitHandler}>
                Submit
              </button>
              <button className="submit" onClick={cancelHandler}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
