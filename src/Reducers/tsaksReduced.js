import { v4 as uuidv4 } from "uuid";


export default function tasksReduced(currentTasks,action){
switch(action.type){
    case "add":{
        const newTask = {
              id: uuidv4(),
              title: action.payload.titleInput,
              Description:action.payload.DescriptionInput,
              isComblet: false
            };
            const updetTasks = [...currentTasks, newTask];
             localStorage.setItem("tasks", JSON.stringify(updetTasks));
            return updetTasks;
         
           

    }
    case "delete":{
        const updatedTasks = currentTasks.filter((t) => t.id !== action.payload.taskId.id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  return updatedTasks;
    }
    case "edit":{
        const updatedTasks = currentTasks.map((t) =>
    t.id === action.payload.taskId.id
      ? { ...t, title: action.payload.editTitle, Description: action.payload.editDescription }
      : t
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  return updatedTasks;
  
    }
    case "git":{
          const storedTasks = localStorage.getItem("tasks");
     
return JSON.parse(storedTasks) ?? [];    
  
    }
    default:{
        throw Error("unknon actionj"+action.type);
    }
}
    return []
}