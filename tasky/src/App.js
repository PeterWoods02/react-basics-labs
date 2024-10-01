import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });
  
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty Dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away"/>
      <Task title="Tidy" deadline="Today" description="CleanCLeanCLEAN"/>
    </div>
  );
}

export default App;
