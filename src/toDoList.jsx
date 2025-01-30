import { useReducer, useState } from "react";

export default function App() {
  const [inputTask, setInputTask] = useState("");
  const [todoList, setTodoList] = useState([]);

 
  const [state,dispatch] = useReducer(reducer,{count:1});
  
  const handleChange = (e) => {
    setInputTask(e.target.value);
  };

  const onSubmit = () => {
    const id = todoList.length + 1;
    const task = { id, work: inputTask };
    setTodoList([...todoList, task]);
    setInputTask("");
  };

  const handleDelete = ({ id }) => {
    const filteredTodo = todoList.filter((p) => p.id != id);
    setTodoList(filteredTodo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          onChange={handleChange}
          type="text"
          value={inputTask}
          placeholder="Add your task"
        />
        <div>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {todoList.map((p) => (
          <li>
            <span>{p.work}</span>
            <button onClick={() => handleDelete({ id: p.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
