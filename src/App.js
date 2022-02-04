import "./App.css";
import { actions } from "./store";
import { useStore } from "./store";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  console.log(state);

  const inputRef = useRef();

  const handleAdd = () => {
    if (state.isEdit) {
      dispatch(actions.updateTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    } else {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    }
  };
  return (
    <div className="App">
      <input
        ref={inputRef}
        value={todoInput}
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Submit</button>

      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => dispatch(actions.editTodo(index))}>
            edit
          </button>
          <button onClick={() => dispatch(actions.delTodo(index))}>
            delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
