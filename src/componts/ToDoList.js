import Tasks from "./Tasks";
import { useContext, useState , useEffect} from "react";
import TaskContext from "../context/TaskContext";
export default function ToDoList() {
       const [filter, setFilter] = useState("all");

    const[addTitleTask,setAddTitleTask]=useState("");
    const [addDetalsTask,setAddDetalsTask]=useState("");
      const {tasks,setTasks} = useContext(TaskContext);

    const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "notcompleted") return !t.completed;
    
    return true; 
    
  });

  const jsxTasks = filteredTasks.map((task) => (
    <Tasks key={task.id} task={task} />
  ));
   function handleAddTask(){
if (!addTitleTask.trim() || !addDetalsTask.trim()) return;

    const newTask = {
        id: tasks.length ,
        title: addTitleTask,
        detals: addDetalsTask,
        completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setAddTitleTask("");
    setAddDetalsTask("");
    }
    useEffect(() => {
      console.log("hi");
      const storejTask= JSON.parse(localStorage.getItem("tasks"))??[];setTasks(storejTask);
      
      
    },[])

  
  return (
    <div style={{direction:"rtl" ,background:"lightblue", padding:"20px", borderRadius:"8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "300px" ,marginTop:"200px"}}>
        <hr/>
      <h2>مهمامي</h2>
      <button 
      style={{}}
      onClick={()=>setFilter("all")
        
      } >الكل</button>
        <button onClick={()=>setFilter("completed")}>المكتملة</button>
        <button onClick={()=>setFilter("notcompleted")}>غير المكتملة</button>
        
      <hr/>
     {jsxTasks}
      
      <div>
        <input 
        value={addTitleTask}
        onChange={(e)=>setAddTitleTask(e.target.value)}
        type="text" placeholder="عنوان المهمة" style={{marginBottom:"10px", padding:"8px", width:"100%", borderRadius:"4px", border:"1px solid #ccc"}}/>
        <br/>
        <textarea 
        value={addDetalsTask}
        onChange={(e)=>setAddDetalsTask(e.target.value)}
        placeholder="تفاصيل المهمة" style={{marginBottom:"10px", padding:"8px", width:"100%", height:"60px", borderRadius:"4px", border:"1px solid #ccc"}}></textarea>
        <br/>
        <button
        onClick={handleAddTask}
        style={{padding:"10px 20px", 
            wqidth:"100%",
            borderRadius:"4px", border:"none", backgroundColor:"#28a745", color:"white", cursor:"pointer"}}>إضافة مهمة</button>
      </div>

    </div>

  );
} 