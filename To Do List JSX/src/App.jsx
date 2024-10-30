import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNewTask = () => {
    const textTask = inputValue.trim();
    if (textTask === "") {
      alert("Please add a new task!");
      return;
    }
    setTasks([...tasks, textTask]);
    setInputValue("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <header>
            <h1>
              To Do List <span>JSX</span>
            </h1>
          </header>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addNewTask();
            }}
            placeholder="Add a new task..."
          />
          <button onClick={addNewTask} className="enterTask">
            ENTER
          </button>
          <div className="todolistContent">
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="listTask">
                  <span className="taskText">{task}</span>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    DELETE
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
