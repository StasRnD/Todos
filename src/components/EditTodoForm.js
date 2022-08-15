import { useEffect, useState } from 'react';

export const EditTodoForm = ({ activeTodo, removeTodo, editTodo }) => {
  const [value, setValue] = useState(activeTodo.value);

  //активная кнопка редактирования и удаления, если текст выбранной todo не изменён,
  //то кнопка редактировать отключена, а удаление включено
  // и наоборот
  const isNewValue = value !== activeTodo.value;

  //отображение текста выбраноой todo в форме редактирования
  useEffect(() => setValue(activeTodo.value), [activeTodo.value]);

  return (
    <div className='interaction-with-todo'>
      <form className='interaction-with-todo__form'>
        <textarea
          autoFocus
          className='interaction-with-todo__textarea'
          placeholder='Новое дело'
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
        <div className='interaction-with-todo__actions'>
          <button
            type='button'
            onClick={() => editTodo({ ...activeTodo, value })}
            disabled={!isNewValue}
          >
            Редактировать
          </button>
          <button
            type='button'
            onClick={() => removeTodo(activeTodo.id)}
            disabled={isNewValue}
          >
            Удалить
          </button>
        </div>
      </form>
    </div>
  );
};
