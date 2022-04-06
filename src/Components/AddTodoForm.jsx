import React from 'react';

const AddTodoForm = props => {
  return (
    <form className="form-control p-5 mt-5 d-flex">
      <input type="text" placeholder="Add new task" className="form-control" />
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default AddTodoForm;
