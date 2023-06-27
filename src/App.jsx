import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 숙련",
      body: "리액트 숙련 공부해봅시다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 기초",
      body: "리액트 기초 공부해봅시다",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDone, setIsdone] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            className="add-input input-body"
            onChange={titleChangeHandler}
          ></input>
          <label className="form-label">내용</label>
          <input
            type="text"
            name="body"
            className="add-input"
            onChange={bodyChangeHandler}
          ></input>
        </div>
        <button className="add-button">추가하기</button>
      </form>
      <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        <div className="list-wrapper">
          <div className="todo-container">
            {todo.map((item) => {
              if (item.isDone == false) {
                return (
                  <div>
                    <h2 className="todo-title">{item.title}</h2>
                    <div>{item.body}</div>
                  </div>
                );
              }
            })}
            <div className="button-set">
              <button className="todo-delete-button button">삭제하기</button>
              <button className="todo-complete-button button">완료</button>
            </div>
          </div>
        </div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div className="list-wrapper">
          <div className="todo-container">
            {todo.map((item) => {
              if (item.isDone == true) {
                return (
                  <div>
                    <h2 className="todo-title">{item.title}</h2>
                    <div>{item.body}</div>
                  </div>
                );
              }
            })}
            <div className="button-set">
              <button className="todo-delete-button button">삭제하기</button>
              <button className="todo-complete-button button">완료</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
