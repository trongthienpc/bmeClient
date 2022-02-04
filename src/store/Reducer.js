import {
  SET_TODO_INPUT,
  ADD_TODO,
  DEL_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "./constants";

const initState = {
  todoInput: "",
  todos: [],
  isChecked: false,
  count: 19,
  isEdit: false,
  todoId: 0,
};

function Reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
        isChecked: true,
        count: +1,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DEL_TODO:
      let newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return { ...state, todos: newTodos };
    case EDIT_TODO:
      let id = action.payload;
      let todos1 = [...state.todos];
      let entry = todos1[id];
      return {
        ...state,
        todoInput: entry,
        isEdit: true,
        todoId: id,
      };
    case UPDATE_TODO:
      let i = state.todoId;
      let temp = [...state.todos];
      temp[i] = action.payload;
      return {
        ...state,
        todos: temp,
        isEdit: false,
      };
    default:
      break;
  }
}

export { initState };

export default Reducer;
