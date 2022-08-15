import { useState, useMemo } from 'react';

export const Todos = ({ todoList, setActiveTodoId, isEditing }) => {
  const [query, setQuery] = useState('');

  //отфильтрованный список всех todo
  const todos = useMemo(
    () =>
      todoList.filter((todo) =>
        todo.value.toLowerCase().includes(query.toLowerCase())
      ),
    [todoList, query]
  );

  const filterTodo = (evt) => setQuery(evt.target.value);

  //при клике на todo, изменить активный id для отображения формы редактирования
  const goToEditPage = (id) => {
    setActiveTodoId(id);
  };

  const goToAddTodo = () => setActiveTodoId(null);

  return (
    <div className='todos'>
      <input
        className='todos__search'
        placeholder='Поиск'
        onChange={filterTodo}
        value={query}
      />
      <ul className='todos__list'>
        <li>
          <button
            className='todos__item'
            disabled={!isEditing}
            onClick={goToAddTodo}
          >
            Перейти к добавлению дела
          </button>
        </li>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className='todos__item'
              onClick={() => goToEditPage(todo.id)}
            >
              {todo.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
