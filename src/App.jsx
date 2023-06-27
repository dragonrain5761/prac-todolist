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
  const [isDone, setIsdone] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };
  // 추가하기 버튼
  const todoAddButtonHandler = (event) => {
    event.preventDefault(); // form이 새로고침하는 것을 방지
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false,
    };

    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };

  //삭제하기 버튼
  const todoRemoveButtonHandler = (id) => {
    const removeTodo = todo.filter((todo) => todo.id !== id);
    setTodo(removeTodo);
  };

  //완료하기 버튼
  const todoCompleteButtonHandler = (id) => {
    const completeTodo = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: true,
        };
      }
      return item;
    });
    setTodo(completeTodo);
  };

  //취소하기 버튼
  const todoCancelButtonHandler = (id) => {
    const cancleTodo = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: false,
        };
      }
      return item;
    });
    setTodo(cancleTodo);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="add-form" onSubmit={todoAddButtonHandler}>
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            value={title}
            type="text"
            name="title"
            className="add-input input-body"
            onChange={titleChangeHandler}
          ></input>
          <label className="form-label">내용</label>
          <input
            value={body}
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
          {todo.map((item) => {
            if (item.isDone == false) {
              return (
                <div className="todo-container" key={item.id}>
                  <div>
                    <h2 className="todo-title">{item.title}</h2>
                    <div>{item.body}</div>
                  </div>
                  <div className="button-set">
                    <button
                      className="todo-delete-button button"
                      onClick={() => todoRemoveButtonHandler(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="todo-complete-button button"
                      onClick={() => todoCompleteButtonHandler(item.id)}
                    >
                      완료
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <h2 className="list-title">Done..! 🎉</h2>
        <div className="list-wrapper">
          {todo.map((item) => {
            if (item.isDone == true) {
              return (
                <div className="todo-container" key={item.id}>
                  <div>
                    <h2 className="todo-title">{item.title}</h2>
                    <div>{item.body}</div>
                  </div>
                  <div className="button-set">
                    <button
                      className="todo-delete-button button"
                      onClick={() => todoRemoveButtonHandler(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="todo-complete-button button"
                      onClick={() => todoCancelButtonHandler(item.id)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
