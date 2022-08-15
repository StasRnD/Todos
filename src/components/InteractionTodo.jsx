import { useState, useEffect } from 'react';

export const InteractionTodo = ({
  dispatch,
  activeTodo,
  setActiveTodo,
  isEditing,
  setIsEditing,
}) => {
  const [value, setValue] = useState(activeTodo.value);
  const canSave = activeTodo.value !== value;

  useEffect(() => {
    setValue(activeTodo.value);
  }, [activeTodo]);

  const changeNewTodoText = (evt) => {
    setValue(evt.target.value);
  };

  const cancelAction = () => {
    setActiveTodo({ value: '' });
    setIsEditing(false);
  };

  const addTodo = () => {
    if (value) {
      dispatch({
        type: 'ADD__TODO',
        payload: { id: activeTodo.id, value },
      });
    }
    cancelAction();
  };

  const removeTodo = () => {
    dispatch({
      type: 'REMOVE__TODO',
      payload: activeTodo.id,
    });
    cancelAction();
  };

  const editTodo = () => {
    dispatch({
      type: 'EDIT__TODO',
      payload: { id: activeTodo.id, value },
    });
    cancelAction();
  };
  
  return (
    <div className='interactionTodo'>
      <form className='interactionTodo__form'>
        <textarea
          className='interactionTodo__textarea'
          placeholder='Новое дело'
          value={value}
          onChange={changeNewTodoText}
        ></textarea>
        <div className='interactionTodo__all-buttons'>
          <button type='button' onClick={addTodo} disabled={isEditing}>
            Добавить дело
          </button>
          <button type='button' onClick={editTodo} disabled={!isEditing}>
            Редактировать
          </button>

          <button
            type='button'
            onClick={removeTodo}
            disabled={!isEditing || canSave}
          >
            Удалить
          </button>
          <button type='button' onClick={cancelAction}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};
