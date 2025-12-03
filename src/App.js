import './App.css';
import ToDoList from './componts/ToDoList';
import { useState } from 'react';
import TaskContext from './context/TaskContext';
const taskList = [
  { id: 0, 
    title: 'مهمة 1',
      detals: 'هذه مهمة سهلة جدا',
     completed: false },

  { id: 1, 
    title: 'مهمة 2',
    detals: 'هذه مهمة مهمة جدا',
     completed: false },

  { id: 2,
     title: 'مهمة 3',
      detals: 'هذه مهمة عادية',
     completed: false },
];

function App() {
  const [tasks, setTasks] = useState(taskList);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }} >
      <TaskContext.Provider value={{ tasks, setTasks }}>
      <ToDoList/>
      </TaskContext.Provider>
    </div>
   
  );
}

export default App;
