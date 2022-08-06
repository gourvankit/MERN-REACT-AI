import React from "react";
import axios from "axios";
import Papa from "papaparse";
import { useState, useRef } from "react";
import "./dataFetch.css";

const DataFetch = (props) => {
  const allowedExtensions = ["csv"];
  const nameRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const linkedInRef = useRef();
  const websiteRef = useRef();
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const values = Object.keys(results.data[0]);
        setData(values);
      },
    });
  };
  const [optionData, setOptionData] = useState([]);
  const cancelButtonHandler = () => {
    props.onCancel();
  };
  let ref = {
    Name: optionData[0],
    Company: optionData[1],
    Website: optionData[2],
    Email: optionData[3],
    LinkedIn: optionData[4],
  };
  const submitButtonHandler = () => {
    const res = axios({
      method: "post",
      url: "/upload",
      data: ref,
      headers: { "Content-Type": "application/json" },
    });
    console.log(res.data);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setOptionData((oldArray) => [...oldArray, e.target.value]);
  };

  return (
    <div className="modelOverlay">
      <div className="modalContainer">
        <div className="inputElement">
          <label
            htmlFor="csvInput"
            style={{
              display: "block",
              fontSize: "24px",
              fontWeight: "300",
              marginBottom: "30px",
              marginTop: "30px",
            }}
          >
            Personalize List
          </label>
          <span className="uploadText">
            Upload a csv containing your prospect information
          </span>
          <input
            onChange={handleFileChange}
            id="csvInput"
            name="file"
            type="File"
            className="inputFile"
          />
        </div>
        {data && (
          <div className="selection">
            <div className="titleSelection">
              <span className="selectionTitle">Full Name</span>
              <select onChange={changeHandler}>
                <option value="none" selected="selected">
                  --select--
                </option>
                {data.map((arr) => {
                  return <option value={arr}>{arr}</option>;
                })}
              </select>
            </div>
            <div className="titleSelection">
              <span className="companyName">Company Name</span>
              <select onChange={changeHandler}>
                <option value="none" selected="selected">
                  --select--
                </option>
                {data.map((arr) => {
                  return (
                    <option value={arr} ref={companyRef}>
                      {arr}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="titleSelection">
              <span className="companyWebsite">Website</span>
              <select onChange={changeHandler}>
                <option value="none" selected="selected">
                  --select--
                </option>
                {data.map((arr) => {
                  return (
                    <option value={arr} ref={websiteRef}>
                      {arr}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="titleSelection">
              <span className="Email">Email</span>
              <select onChange={changeHandler}>
                <option value="none" selected="selected">
                  --select--
                </option>
                {data.map((arr) => {
                  return (
                    <option value={arr} ref={emailRef}>
                      {arr}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="titleSelection">
              <span className="LinkedIn">LinkedIn</span>
              <select onChange={changeHandler}>
                <option value="none" selected="selected">
                  --select--
                </option>
                {data.map((arr) => {
                  return (
                    <option value={arr} ref={linkedInRef}>
                      {arr}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button className="cancel" onClick={cancelButtonHandler}>
                Cancel
              </button>
              <button className="cancel" onClick={submitButtonHandler}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetch;
