import React from "react";
import "./emailInput.css";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import DataFetch from "../DataFetch/DataFetch";
import Navbar from "../Navbar/Navbar";

const EmailInput = () => {
  const [emailResponse, setEmailResponse] = useState("");
  const [writeEmail, setWriteEmail] = useState(false);
  const [csvButton, setCsvButton] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const info = await axios.get("/data", {
          headers: { Accept: "application/json" },
        });
        setTimeout(() => setEmailResponse(info.data), 3000);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const writeEmailButton = () => {
    setWriteEmail((prev) => !prev);
  };
  const clickHandler = () => {
    var data = document.getElementById("inputBtn");
    console.log(data.innerText);
  };
  const csvClickHandler = () => {
    setCsvButton((prev) => !prev);
  };
  const cancelButtonHandler = () => {
    setCsvButton((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <div className="box">
        <span className="inputDetails">
          Enter your recipient's LinkedIn profile username{" "}
        </span>
        <div className="inputArea">
          <span className="linkedIn">linkedin.com/in/</span>
          <input
            type="text"
            placeholder="Recipient Name"
            className="input"
          ></input>
        </div>

        <button className="create" onClick={writeEmailButton}>
          <span className="buttonText">Write My Email</span>
        </button>

        <button onClick={csvClickHandler} className="csvButton">
          upload a csv file
        </button>
      </div>
      <div className="dataOutput">
        {csvButton && <DataFetch onCancel={cancelButtonHandler} />}
        {writeEmail && !emailResponse && <LoadingSpinner />}
        {emailResponse &&
          emailResponse.map((arr) => {
            return (
              <>
                {writeEmail && (
                  <div className="finalData">
                    <button
                      className="buttonDetails"
                      id="inputBtn"
                      onClick={clickHandler}
                    >
                      <span className="buttonText">{arr.data}</span>
                    </button>
                    <div className="score">
                      <span className="text">Email score</span>
                      <span className="scoreNumber">{arr.score}</span>
                      <div className="criteria">
                        <span className="redablity">
                          Redablity-{arr.redablity}
                        </span>
                        <span className="personal">
                          Personal-{arr.personal}
                        </span>
                        <span className="engaging">
                          Engaging-{arr.engaging}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
      </div>
    </>
  );
};

export default EmailInput;
