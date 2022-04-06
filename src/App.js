import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListItems from './Components/TodoListItems';
import AddTodoForm from './Components/AddTodoForm';

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
    todos,
    todoValue: '',
  };
  render() {
    const {todos, todoValue} = this.state;
    return (
      <div className="container">
        <AddTodoForm todoValue={todoValue} />
        <TodoListItems todos={todos} />
      </div>
    );
  }
}
export default App;
