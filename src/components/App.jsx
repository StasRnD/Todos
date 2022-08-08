import { useState, useReducer } from 'react';
import { Todos } from './Todos';
import { InteractionTodo } from './InteractionTodo';
import { todos } from '../constans/constans';

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'ADD__TODO':
      return [
        ...todos,
        { number: todos[todos.length - 1].number + 1, text: action.payload },
      ];
    case 'REMOVE__TODO':
      return todos.filter((todo) => todo.number !== Number(action.payload));
    case 'REDAKTOR':
      return todos.map((todo) =>
        todo.number === Number(action.payload.number)
          ? { number: todo.number, text: action.payload.text }
          : todo
      );
    case 'FILTER':
      return todos.filter((todo) =>
        todo.text.toLowerCase().includes(action.payload)
      );
    default:
      return todos;
  }
};

export const App = () => {
  const [activeTodo, setActiveTodo] = useState({});
  const [todoList, dispatch] = useReducer(todoReducer, todos);

  return (
    <div className='main'>
      <Todos
        todoList={todoList}
        setActiveTodo={setActiveTodo}
        dispatch={dispatch}
      />
      <InteractionTodo
        dispatch={dispatch}
        activeTodo={activeTodo}
        todoList={todoList}
        setActiveTodo={setActiveTodo}
      />
    </div>
  );
};
