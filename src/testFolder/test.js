// 

export default function Tasks({task}) {
  return (
    <div style={{direction:"rtl" ,background:"purple", padding:"20px", borderRadius:"8px"}}>
     
      <h3>{task.title} </h3>
        <p>{task.detals}</p>
        <hr/>

        <button>اكتمال</button>
        <button>حذف</button>
        <button>تعديل</button>

    
      
    </div>
  );
}



import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";


export default function Tasks({ task }) {
  const { tasks, setTasks } = useContext(TaskContext);
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  
  const [titleEdit, setTitleEdit] = useState(task.title);
  const [detalsEdit, setDetalsEdit] = useState(task.detals); 

  function handleComplete() {
    const updatedTasks = tasks.map(t => {
      if (t.id === task.id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updatedTasks);
  }
  
  function handlEdeit() {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id
        ? { ...t, title: titleEdit, detals: detalsEdit }
        : t
    );
    setTasks(updatedTasks);
    setShowEditForm(false);
  }

  function handleDelete() {
    const updatedTasks1 = tasks.filter(t => t.id !== task.id);
    setTasks(updatedTasks1);
    setShowDeleteConfirm(false);
  }
  
  return (
    <div style={{ direction: "rtl", background: "purple", padding: "20px", borderRadius: "8px", margin: "10px 0" }}>

      <h3>{task.title} </h3>
      <p>{task.detals}</p>
      <hr />

      <button onClick={handleComplete} style={{ backgroundColor: task.completed ? "green" : "white" }}>اكتمال</button>
      <button onClick={() => setShowDeleteConfirm(true)}>حذف</button>
      <button onClick={() =>
        setTitleEdit(task.title) || setDetalsEdit(task.detals) ||
        setShowEditForm(true)}>تعديل</button>
      
      {showEditForm && (
        <div 
        
        style={{
          direction: "rtl",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
            <h3>تعديل المهمة</h3>
            <input
              value={titleEdit}
              onChange={(e) => setTitleEdit(e.target.value)}
            />
            <br />
            <textarea
              value={detalsEdit}
              onChange={(e) => setDetalsEdit(e.target.value)}
            />
            <button onClick={() => setShowEditForm(false)} style={{ margin: '10px' }}>X</button>
            <button onClick={handlEdeit}>تعديل</button>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div style={{
          direction: "rtl",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
            <p>هل أنت متأكد من حذف هذه المهمة؟</p>

            <button onClick={() => setShowDeleteConfirm(false)}>لا</button>
            <button onClick={handleDelete} style={{ marginRight: "10px" }}>نعم</button>
          </div>
        </div>
      )}


    </div>
  );
}



import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

export default function Tasks({ task }) {

  const { tasks, setTasks } = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState(false);       // حالة التعديل
  const [newTitle, setNewTitle] = useState(task.title);    // قيم مؤقتة
  const [newDetails, setNewDetails] = useState(task.detals);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const updated = tasks.map((t) =>
      t.id === task.id ? { ...t, title: newTitle, detals: newDetails } : t
    );
    setTasks(updated);
    setIsEditing(false);
  }

  return (
    <div style={{ direction: "rtl", background: "purple", padding: "20px", borderRadius: "8px", marginBottom: "10px" }}>
      
      {!isEditing ? (
        <>
          <h3>{task.title}</h3>
          <p>{task.detals}</p>
          <hr />

          <button onClick={handleEdit}>تعديل</button>
        </>
      ) : (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ width: "100%", marginBottom: "8px" }}
          />

          <textarea
            value={newDetails}
            onChange={(e) => setNewDetails(e.target.value)}
            style={{ width: "100%", marginBottom: "8px" }}
          />

          <button onClick={handleSave}>حفظ</button>
        </>
      )}

    </div>
  );
}
