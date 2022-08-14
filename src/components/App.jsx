import { useState, useReducer } from 'react';
import { Todos } from './Todos';
import { InteractionTodo } from './InteractionTodo';
import { todos } from '../constants/constants';


const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'ADD__TODO':
      return [...todos, { ...action.payload, id: Date.now() + Math.random() }];
    case 'REMOVE__TODO':
      return todos.filter((todo) => todo.id !== action.payload);
    case 'EDIT__TODO':
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    default:
      return todos;
  }
};

export const App = () => {
  const [activeTodo, setActiveTodo] = useState({ value: '' });
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
