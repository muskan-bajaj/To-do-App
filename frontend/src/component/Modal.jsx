import React, { useState } from "react";
import "./css/Modal.css";
import axios from "axios";

export default function Modal(props) {
  const [data, setData] = useState({
    Name: "",
    Category: "",
    Date: "",
    Priority: 0,
  });

  const addNewTask = async () => {
    const response = await axios.post("http://localhost:8080/addTask", data);
    props.setModal(false);
  };

  return (
    <div className="mainModal">
      <div className="content">
        <div className="form">
          <h1>Add a new to-do:</h1>
        </div>
        <div className="modalForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name for the task you’re going to do"
            value={data.Name}
            onChange={(e) => {
              setData({ ...data, Name: e.target.value });
            }}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="e.g. household, school, work"
            value={data.Category}
            onChange={(e) => {
              setData({ ...data, Category: e.target.value });
            }}
          />
          <label htmlFor="datetime">Date/Time:</label>
          <input
            type="datetime-local"
            name="datetime"
            id="datetime"
            value={data.Date}
            onChange={(e) => {
              setData({ ...data, Date: e.target.value });
            }}
          />
          <label htmlFor="priority">Priority:</label>
          <select
            name="priority"
            id="priority"
            onChange={(e) => {
              setData({ ...data, Priority: Number(e.target.value) });
            }}
          >
            <option hidden selected>
              Select from dropdown
            </option>
            <option value={0}>High</option>
            <option value={1}>Medium</option>
            <option value={2}>Low</option>
          </select>
        </div>
        <div className="modalBtn">
          <button className="saveBtn" onClick={addNewTask}>
            Save
          </button>
          <button
            className="cancelBtn"
            onClick={() => {
              props.setModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
