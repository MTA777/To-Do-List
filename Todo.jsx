import React, { useState } from "react";

function Todo() {
  const [toDo, setTodo] = useState(["Do Code"]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function addToDo(e) {
    e.preventDefault();
    if (text.trim().length > 0) {
      setTodo([...toDo, text]);
      setText("");
      console.log(toDo);
    }
  }

  function deleteToDo(index) {
    setTodo(toDo.filter((toDo, i) => i !== index));
  }

  function editToDo(index, newText) {
    setTodo(toDo.map((toDo, i) => (i === index ? newText : toDo)));
  }

  return (
    <div>
      <h1>Write your todo</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={(e) => addToDo(e)}>Add todo</button>
      <ul>
        {toDo.map((toDo, index) => (
          <li key={index}>
            {toDo}
            <button onClick={() => deleteToDo(index)}>Delete</button>
            <button onClick={() => editToDo(index, prompt("Edit :", toDo))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
