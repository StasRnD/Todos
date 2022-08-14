

export const InteractionTodo = ({ dispatch, activeTodo, setActiveTodo }) => {
  const changeNewTodoText = (evt) => {
    setActiveTodo({ id: activeTodo.id, value: evt.target.value });
  };

  const addTodo = () => {
    if (activeTodo.value) {
      dispatch({
        type: 'ADD__TODO',
        payload: activeTodo,
      });
    }
    setActiveTodo({ value: '' });
  };

  const removeTodo = () => {
    dispatch({
      type: 'REMOVE__TODO',
      payload: activeTodo.id,
    });
    setActiveTodo({ value: '' });
  };

  const editTodo = () => {
    dispatch({
      type: 'EDIT__TODO',
      payload: activeTodo,
    });
    setActiveTodo({ value: '' });
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
          <button type='button' onClick={addTodo}>
            Добавить дело
          </button>
          <button type='button' onClick={editTodo}>
            Редактировать
          </button>

          <button type='button' onClick={removeTodo}>
            Удалить
          </button>
        </div>
      </form>
    </div>
  );
};
