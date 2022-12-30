import { createRef, useState } from "react";
import UUID from "uuidjs";

function App() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = createRef();
  const onSubmitHandler = () => {
    if (inputRef.current?.value) {
      setTodoList((prevTodoList) => [
        ...prevTodoList,
        { id: UUID.generate(), name: inputRef.current.value },
      ]);
    }
  };
  const onDelete = (id) => {
    setTodoList(todoList.filter((n) => n.id !== id));
  };

  return (
    <div>
      <h2>ToDolist</h2>
      <input type="text" ref={inputRef} />
      <button onClick={onSubmitHandler}>Submit</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.name} <button onClick={() => onDelete(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
