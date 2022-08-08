import { useState } from 'react';

export const Todos = ({ todoList, setActiveTodo, dispatch }) => {
  const [filterValue, setFilterValue] = useState('');

  const choiseTodo = (evt) => {
    setActiveTodo({
      number: evt.target.id,
      text: evt.target.textContent,
    });
  };

  const filterTodo = (evt) => {
    setFilterValue(evt.target.value);
    dispatch({
      type: 'FILTER',
      payload: filterValue.toLowerCase(),
    });
  };

  return (
    <div className='todos'>
      <input onChange={filterTodo} value={filterValue} />
      <ul className='todos__list'>
        {todoList.map((todo) => {
          return (
            <li
              key={todo.number}
              id={todo.number}
              className='todos__item'
              onClick={choiseTodo}
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
