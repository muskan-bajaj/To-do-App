import React from "react";
import "./css/Modal.css";

export default function Modal(props) {
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
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="e.g. household, school, work"
          />
          <label htmlFor="datetime">Date/Time:</label>
          <input type="datetime-local" name="datetime" id="datetime" />
          <label htmlFor="priority">Priority:</label>
          <select name="priority" id="priority">
            <option hidden selected>
              Select from dropdown
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="modalBtn">
          <button className="saveBtn">Save</button>
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
