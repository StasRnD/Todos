export const InteractionTodo = ({ dispatch, activeTodo, setActiveTodo }) => {
  const changeNewTodoText = (evt) => {
    setActiveTodo({ number: activeTodo.number, text: evt.target.value });
  };

  const actionWithTodo = (evt) => {
    evt.preventDefault();
    switch (evt.target.value) {
      case 'ADD':
        dispatch({
          type: 'ADD__TODO',
          payload: activeTodo.text,
        });
        break;
      case 'DELETE':
        dispatch({
          type: 'REMOVE__TODO',
          payload: activeTodo.number,
        });
        break;
      case 'REDAKTOR':
        dispatch({
          type: 'REDAKTOR',
          payload: activeTodo,
        });
        break;

      default:
        return null;
    }

    setActiveTodo({ text: '' });
  };

  // const addTodo = () => {
  //   dispatch({
  //     type: 'ADD__TODO',
  //     payload: todoText.text,
  //   });
  //   setNewTodo({ text: '' });
  // };

  // const removeTodo = () => {
  //   dispatch({
  //     type: 'REMOVE__TODO',
  //     payload: activeTodo.number,
  //   });
  //   setNewTodo({ text: '' });
  // };

  // const redaktor = () => {
  //   dispatch({
  //     type: 'REDAKTOR',
  //     payload: todoText,
  //   });
  // };
  //
  return (
    <div className='interactionTodo'>
      <form className='interactionTodo__form'>
        <textarea
          className='interactionTodo__textarea'
          placeholder='Новое дело'
          value={activeTodo.text}
          onChange={changeNewTodoText}
        ></textarea>
        <div className='interactionTodo__all-buttons'>
          <button onClick={actionWithTodo} value='ADD'>
            Добавить дело
          </button>
          <button onClick={actionWithTodo} value='REDAKTOR'>
            Редактировать
          </button>

          <button onClick={actionWithTodo} value='DELETE'>
            Удалить
          </button>
        </div>
      </form>
    </div>
  );
};
