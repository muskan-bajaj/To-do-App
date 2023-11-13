import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../component/TaskList";
import Modal from "../component/Modal";
import "./css/Home.css";

// const data = [
//   {
//     _id: 1,
//     task: "DAA Project",
//     category: "Coding",
//     when: "26.07.23",
//     priority: "High",
//     fulfilled: true,
//   },
//   {
//     _id: 2,
//     task: "DAA Project",
//     category: "Coding",
//     when: "26.07.23",
//     priority: "High",
//     fulfilled: false,
//   },
// ];

export default function Home() {
  const [all, setAll] = useState(true);
  const [todo, setTodo] = useState(false);
  const [complete, setComplete] = useState(false);
  const [data, setData] = useState([]);
  const [todoTask, setTodoTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [modal, setModal] = useState(false);

  const active = {
    color: "white",
    backgroundColor: "#000",
  };

  const byDefault = {
    color: "#000",
    backgroundColor: "white",
  };

  const getAllTask = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getTask");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllTask();
  }, []);

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
  }, [data]);

  // useEffect(() => {
  //   console.log(todoTask);
  //   console.log(completedTask);
  // }, [todoTask, completedTask]);

  return (
    <div className="main">
      <div className="toDo">
        <div className="heading">
          <p>React To-Do List</p>
        </div>
        <div className="buttons">
          <button
            className="btn1"
            onClick={() => {
              setModal(true);
            }}
          >
            Add a new to-do
          </button>
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
      {modal && <Modal setModal={setModal} />}
      <div className="footer">
        {/* Muskan Bajaj, Vinit Agarwal, Satyam Raj © 2023 all rights reserved */}
      </div>
    </div>
  );
}
