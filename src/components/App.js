import { useState, useMemo } from 'react';
import { Todos } from './Todos';
import { EditTodoForm } from './EditTodoForm';
import { AddTodoForm } from './AddTodoForm';
import { useSelector } from 'react-redux';

export const App = () => {
  const [activeTodoId, setActiveTodoId] = useState(null);
  const todos = useSelector((state) => state);

  //по выбранному(активному) id, найти нужную todo для отображения в форме редактирования
  const activeTodo = useMemo(
    () => todos.find((todo) => todo.id === activeTodoId),
    [todos, activeTodoId]
  );

  //переменная для отображения формы добавления или редактирования
  const isEditing = !!activeTodoId;

  return (
    <div className='main'>
      <Todos
        todoList={todos}
        setActiveTodoId={setActiveTodoId}
        isEditing={isEditing}
      />

      {isEditing ? (
        <EditTodoForm
          activeTodo={activeTodo}
          setActiveTodoId={setActiveTodoId}
        />
      ) : (
        <AddTodoForm />
      )}
    </div>
  );
};
