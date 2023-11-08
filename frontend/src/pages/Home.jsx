import React from "react";
import "./css/Home.css";

const data = [
  {
    task: "DAA Project",
    category: "Coding",
    when: "26.07.23",
    priority: "High",
    fulfilled: true,
  },
  {
    task: "DAA Project",
    category: "Coding",
    when: "26.07.23",
    priority: "High",
    fulfilled: false,
  },
];

export default function Home() {
  return (
    <div className="main">
      <div className="toDo">
        <div className="heading">
          <p>React To-Do List</p>
        </div>
        <div className="buttons">
          <button className="btn1">Add a new to-do</button>
          <button className="btn2">All</button>
          <button className="btn3">To-Do</button>
          <button className="btn4">Completed</button>
        </div>
        <div className="list">
          <div className="tasks">
            <div>Task</div>
            <div>Category</div>
            <div>When</div>
            <div>Priority</div>
            <div>Fulfillment</div>
            <div></div>
          </div>
          {data.map((item) => {
            return (
              <div key={item} className="listItem">
                <div>{item.task}</div>
                <div>{item.category}</div>
                <div>{item.when}</div>
                <div>{item.priority}</div>
                <div>
                  {item.fulfilled ? (
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
          })}
        </div>
      </div>
      <div className="footer">
        Muskan Bajaj, Vinit Agarwal, Satyam Raj © 2023 all rights reserved
      </div>
    </div>
  );
}
