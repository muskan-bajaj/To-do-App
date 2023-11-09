import React, { useEffect, useState } from "react";
import "./css/Home.css";
import TaskList from "../component/TaskList";

const data = [
  {
    _id: 1,
    task: "DAA Project",
    category: "Coding",
    when: "26.07.23",
    priority: "High",
    fulfilled: true,
  },
  {
    _id: 2,
    task: "DAA Project",
    category: "Coding",
    when: "26.07.23",
    priority: "High",
    fulfilled: false,
  },
];

export default function Home() {
  const [all, setAll] = useState(true);
  const [todo, setTodo] = useState(false);
  const [complete, setComplete] = useState(false);
  const [todoTask, setTodoTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const active = {
    color: "white",
    backgroundColor: "#000",
  };

  const byDefault = {
    color: "#000",
    backgroundColor: "white",
  };

  useEffect(() => {
    setTodoTask(
      data.filter((item) => {
        if (!item.fulfilled) {
          return item;
        }
      })
    );
    setCompletedTask(
      data.filter((item) => {
        if (item.fulfilled) {
          return item;
        }
      })
    );
  }, []);

  useEffect(() => {
    console.log(todoTask);
    console.log(completedTask);
  }, [todoTask, completedTask]);

  return (
    <div className="main">
      <div className="toDo">
        <div className="heading">
          <p>React To-Do List</p>
        </div>
        <div className="buttons">
          <button className="btn1">Add a new to-do</button>
          <button
            className="btn2"
            style={all ? active : byDefault}
            onClick={() => {
              setAll(true);
              setTodo(false);
              setComplete(false);
            }}
          >
            All
          </button>
          <button
            className="btn3"
            style={todo ? active : byDefault}
            onClick={() => {
              setAll(false);
              setTodo(true);
              setComplete(false);
            }}
          >
            To-Do
          </button>
          <button
            className="btn4"
            style={complete ? active : byDefault}
            onClick={() => {
              setAll(false);
              setTodo(false);
              setComplete(true);
            }}
          >
            Completed
          </button>
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
          {all &&
            data.map((item) => {
              return <TaskList key={item} item={item} />;
            })}
          {todo &&
            todoTask.map((item) => {
              return <TaskList key={item} item={item} />;
            })}
          {complete &&
            completedTask.map((item) => {
              return <TaskList key={item} item={item} />;
            })}
        </div>
      </div>
      <div className="footer">
        Muskan Bajaj, Vinit Agarwal, Satyam Raj © 2023 all rights reserved
      </div>
    </div>
  );
}
