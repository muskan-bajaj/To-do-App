import React from "react";
import "./css/TaskList.css";

export default function TaskList(props) {
  return (
    <div key={props.item} className="listItem">
      <div>{props.item.task}</div>
      <div>{props.item.category}</div>
      <div>{props.item.when}</div>
      <div>{props.item.priority}</div>
      <div>
        <input
          type="checkbox"
          defaultChecked={props.item.fulfilled}
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
      </div>
    </div>
  );
}
