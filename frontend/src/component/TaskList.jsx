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
        {props.item.fulfilled ? (
          <>
            <input type="checkbox" checked={true} />
          </>
        ) : (
          <>
            <input type="checkbox" checked={false} />
          </>
        )}
      </div>
    </div>
  );
}
