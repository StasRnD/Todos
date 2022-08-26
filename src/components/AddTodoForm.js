import { useState } from 'react';
import { addTodo } from '../redux/redux';
import { useDispatch } from 'react-redux';

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  //текст добавляемой todo
  const [value, setValue] = useState('');

  //возможность добавить todo, если todo включает хотя бы 1 символ
  const canAdd = value.length > 0;

  const onAdd = () => {
    if (canAdd) {
      dispatch(addTodo(value));
    }
    setValue('');
  };

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  const onKeyUp = (evt) => {
    if (evt.key === 'Enter') {
      onAdd();
    }
  };

  return (
    <div className='interaction-with-todo'>
      <form className='interaction-with-todo__form'>
        <textarea
          autoFocus
          className='interaction-with-todo__textarea'
          placeholder='Новое дело'
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <div className='interaction-with-todo__actions'>
          <button type='button' onClick={onAdd} disabled={!canAdd}>
            Добавить дело
          </button>
        </div>
      </form>
    </div>
  );
};
