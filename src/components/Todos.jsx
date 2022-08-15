import { useState, useMemo } from 'react';

export const Todos = ({ todoList, setActiveTodo, setIsEditing }) => {
  const [query, setQuery] = useState('');

  const todos = useMemo(
    () =>
      todoList.filter((todo) =>
        todo.value.toLowerCase().includes(query.toLowerCase())
      ),
    [todoList, query]
  );

  const filterTodo = (evt) => {
    setQuery(evt.target.value);
  };

  const onTodoClick = (todo) => {
    setActiveTodo(todo)
    setIsEditing(true)
  }

  return (
    <div className='todos'>
      <input onChange={filterTodo} value={query} />
      <ul className='todos__list'>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className='todos__item'
              onClick={() => onTodoClick(todo)}
            >
              {todo.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
