import { useState, useMemo } from 'react';

export const Todos = ({ todoList, setActiveTodo }) => {
  const [query, setQuery] = useState('');

  const result = useMemo(
    () =>
      todoList.filter((todo) =>
        todo.value.toLowerCase().includes(query.toLowerCase())
      ),
    [todoList, query]
  );

  const filterTodo = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div className='todos'>
      <input onChange={filterTodo} value={query} />
      <ul className='todos__list'>
        {result.map((todo) => {
          return (
            <li
              key={todo.id}
              className='todos__item'
              onClick={() => setActiveTodo(todo)}
            >
              {todo.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
