import React from "react";
import "./App.css";

function App() {
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
          ></input>
          <label className="form-label">내용</label>
          <input type="text" name="body" className="add-input"></input>
        </div>
        <button className="add-button">추가하기</button>
      </form>
      <div className="list-container"></div>
    </div>
  );
}

export default App;
