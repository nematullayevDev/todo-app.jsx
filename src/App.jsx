import { useState } from "react";
import Header from "./header";
function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const copyTodos = [
      ...todos,
      { text: text, id: Math.ceil(Math.random() * 10000), completed: false },
    ];
    setTodos(copyTodos);
    setText("");
  };
  const submitON = (e) => {
    setText(e.target.value);
  };

  // delete
  const Delete = (id) => {
    const fileteTodo = todos.filter((t) => t.id !== id);
    setTodos(fileteTodo);
  };

  // Coplated line
  const coplatedLine = (id) => {
    const copyTodo = [...todos];
    const oneTodo = copyTodo.find((t) => t.id === id);
    oneTodo.completed = !oneTodo.completed;
    setTodos(copyTodo)
  };

  // All delete
  const allDelite = () => {
    setTodos([]);
  };

  return (
    <div className="full">
      <div className="container">
        <Header />
        <form className="form" onSubmit={submit}>
          <input
            className="input"
            type="text"
            value={text}
            placeholder="Create a new todo…"
            onChange={submitON}
          />
        </form>

        <main className="main">
          <ul className="main_ul">
            {todos.map((todo) => {
              return (
                <div className="li_div">
                  <li
                  onClick={() => coplatedLine(todo.id)}
                    className="main_li"
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    <h3 className="main_h3">{todo.text}</h3>
                  </li>
                  <button
                    className="delite_button"
                    onClick={() => {
                      Delete(todo.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
                        fill="#494C6B"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </ul>
          <footer className="footer">
            <p className="footer_count">
              <span>5</span>items left
            </p>
            <div className="footer_div">
              <button className="footer_buttons">All</button>
              <button className="footer_buttons">Active</button>
              <button className="footer_buttons">Completed</button>
            </div>
            <div className="footer_clear_div">
              <button className="clear_all" onClick={allDelite}>
                Clear Completed
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
