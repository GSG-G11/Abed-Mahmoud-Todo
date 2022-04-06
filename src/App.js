import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListItems from './Components/TodoListItems';

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
  };
  render() {
    const {todos} = this.state;
    return (
      <div className="container">
        <TodoListItems todos={todos} />
      </div>
    );
  }
}
export default App;
