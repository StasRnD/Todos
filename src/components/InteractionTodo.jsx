

export const InteractionTodo = ({
  dispatch,
  activeTodo,
  setActiveTodo,
  isEditing,
  setIsEditing,
}) => {

  const changeNewTodoText = (evt) => {
    setActiveTodo({ id: activeTodo.id, value: evt.target.value });
  };

  const cancelAction = () => {
    setActiveTodo({ value: '' });
    setIsEditing(false);
  };

  const addTodo = () => {
    if (activeTodo.value) {
      dispatch({
        type: 'ADD__TODO',
        payload: activeTodo,
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
      payload: activeTodo,
    });
    cancelAction();
  };

  return (
    <div className='interactionTodo'>
      <form className='interactionTodo__form'>
        <textarea
          className='interactionTodo__textarea'
          placeholder='Новое дело'
          value={activeTodo.value}
          onChange={changeNewTodoText}
        ></textarea>
        <div className='interactionTodo__all-buttons'>
          <button type='button' onClick={addTodo} disabled={isEditing}>
            Добавить дело
          </button>
          <button type='button' onClick={editTodo} disabled={!isEditing}>
            Редактировать
          </button>

          <button type='button' onClick={removeTodo} disabled={!isEditing}>
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
