import React from 'react';
import EditTodoForm from './EditTodoForm';

function TodoListItems(props) {
  const {todos,deleteTodo,editTodo} = props;
  return (
    <ul className="list-group mt-5">
      {todos.map(todo => {
        return (
          <div
            className="col-md-12 m-auto d-flex justify-content-between align-items-center list-group-item bg-dark border border-light border-bottom-1"
            key={todo.id}
          >
            <h5 className="text-light b">{todo.text}</h5>
            <div className="buttons">
              <EditTodoForm editTodo={editTodo} id={todo.id} text = {todo.text}/>
              <button onClick={deleteTodo} value = {todo.id} className="btn btn-danger m-3">Delete</button>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default TodoListItems;
