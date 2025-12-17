import {  useState } from 'react';
import './App.css';
import TodoList from './combonats/TodoList';
import { TasksContext } from './contaxt/TasksContext';
import {v4 as uuidv4} from 'uuid';


const initialTasks=[
      {
        id:uuidv4(),
        title:"farest task",
        Description:"creat home page 123",
        isComblet:false
      },
      {
        id:uuidv4(),
        title:"sacend task",
        Description:"creat abuot page",
        isComblet:false
      },
      {
        id:uuidv4(),
        title:"third task",
        Description:"creat contact page",
        isComblet:false
      }
    ];
function App() {


    const [tasks,setTask]= useState(initialTasks);
    

   
  return (
    <div className="App" style={{display:"flex",justifyContent:"center" , alignItems:"center" ,height:"100vh",
      direction:"rtl"
    }}>
      <TasksContext.Provider value={{tasks,setTask}}>
         <TodoList/>

         </TasksContext.Provider>
     
    </div>
  );
}

export default App;
