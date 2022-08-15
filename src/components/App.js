import { useState, useReducer, useMemo } from 'react';
import { Todos } from './Todos';
import { todos } from '../constants/constants';
import { EditTodoForm } from './EditTodoForm';
import { AddTodoForm } from './AddTodoForm';

const Action = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  EDIT_TODO: 'EDIT_TODO',
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case Action.ADD_TODO:
      return [
        ...todos,
        { value: action.payload, id: Date.now() + Math.random() },
      ];
    case Action.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload);
    case Action.EDIT_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    default:
      return todos;
  }
};

export const App = () => {
  const [activeTodoId, setActiveTodoId] = useState(null);
  const [todoList, dispatch] = useReducer(todoReducer, todos);

  //по выбранному(активному) id, найти нужную todo для отображения в форме редактирования
  const activeTodo = useMemo(
    () => todoList.find((todo) => todo.id === activeTodoId),
    [todoList, activeTodoId]
  );

  //переменная для отображения формы добавления или редактирования
  const isEditing = !!activeTodoId;

  const goToAddTodoPage = () => setActiveTodoId(null);

  const addTodo = (value) =>
    dispatch({ type: Action.ADD_TODO, payload: value });

  const removeTodo = (id) => {
    dispatch({ type: Action.REMOVE_TODO, payload: id });
    goToAddTodoPage();
  };

  const editTodo = (todo) =>
    dispatch({ type: Action.EDIT_TODO, payload: todo });

  return (
    <div className='main'>
      <Todos
        todoList={todoList}
        setActiveTodoId={setActiveTodoId}
        isEditing={isEditing}
      />

      {isEditing ? (
        <EditTodoForm
          activeTodo={activeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ) : (
        <AddTodoForm addTodo={addTodo} />
      )}
    </div>
  );
};
