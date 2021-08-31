import React from 'react';
import './App.css';


const arrayOfTasks = ['acordar', ' tomar café', 'escovar dentes', 'arrumar casa', 'ir estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>{arrayOfTasks.map((tasks) => Task(tasks))}</ul>
    );
  }
}

export default App;
