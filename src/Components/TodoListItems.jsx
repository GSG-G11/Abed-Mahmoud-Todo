import React from 'react';

function TodoListItems(props) {
  const {todos} = props;
  return (
    <ul className="list-group mt-5">
      {todos.map(todo => {
        return (
          <div
            className="col-md-8 m-auto d-flex justify-content-between align-items-center list-group-item"
            key={todo.id}
          >
            <h5>{todo.text}</h5>
            <div className="btns">
              <button className="btn btn-warning m-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default TodoListItems;
