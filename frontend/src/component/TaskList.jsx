import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/TaskList.css";

export default function TaskList(props) {
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (props.item.Priority == 2) {
      setPriority("High");
    }
    if (props.item.Priority == 1) {
      setPriority("Medium");
    }
    if (props.item.Priority == 0) {
      setPriority("Low");
    }
  }, []);

  return (
    <div key={props.item} className="listItem">
      <div>{props.item.Name}</div>
      <div>{props.item.Category}</div>
      <div>{props.item.Date}</div>
      <div>{priority}</div>
      <div>
        <input
          type="checkbox"
          defaultChecked={props.item.Completed}
          // onChange={props.toggleStatus(props.item._id, props.item.Completed)}
          onChange={(e) => {
            props.toggleStatus(props.item._id, e.target.checked);
          }}
        />
      </div>
    </div>
  );
}
