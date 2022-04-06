import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListItems from './Components/TodoListItems';
import AddTodoForm from './Components/AddTodoForm';
import swal from 'sweetalert';

const todos = [
  {
    id: 1,
    text: 'Take out the trash',
  },
  {
    id: 2,
    text: 'Grocery shopping',
  },
  {
    id: 3,
    text: 'Dentist appointment',
  },
];
class App extends Component {
  state = {
    todos: todos.sort((a, b) => b.id - a.id),
    todoValue: '',
  };

  addTodo = e => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    if (!value.trim()) {
      swal('Oops...', 'You must enter a value!', 'error');
      return;
    }
    const newTodo = {
      id: this.state.todos.length + 1,
      text: value,
    };

    this.setState({
      todos: [...this.state.todos, newTodo].sort((a, b) => b.id - a.id),
    });
  };
  render() {
    const {todos, todoValue} = this.state;
    return (
      <div className="container">
        <h1 className="text-center mt-5">
          <span className="text-info">Todo</span> List
        </h1>
        <AddTodoForm todoValue={todoValue} addTodo={this.addTodo} />
        <TodoListItems todos={todos} />
      </div>
    );
  }
}
export default App;
