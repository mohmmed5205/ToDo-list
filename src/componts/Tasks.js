import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

export default function Tasks({ task }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [titleEdit, setTitleEdit] = useState(task.title);
  const [detalsEdit, setDetalsEdit] = useState(task.detals);

  function handleComplete() {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  }

  function handlEdeit() {
    const updated = tasks.map((t) =>
      t.id === task.id
        ? { ...t, title: titleEdit, detals: detalsEdit }
        : t
    );
    setTasks(updated);
    setShowEditForm(false);
  }

  function handleDelete() {
    const updated = tasks.filter((t) => t.id !== task.id);
    setTasks(updated);
    setShowDeleteConfirm(false);
  }
 
  return (
    <div style={{
      direction: "rtl",
      background: "purple",
      padding: "20px",
      borderRadius: "8px",
      margin: "10px 0",
      color: "white"
    }}>

      <h3>{task.title}</h3>
      <p>{task.detals}</p>
      <hr />

      <button
        onClick={handleComplete}
        style={{
          backgroundColor: task.completed ? "green" : "white",
          color: task.completed ? "white" : "black",
          padding: "6px 12px",
          border: "none",
          borderRadius: "5px",
          marginLeft: "6px",
          cursor: "pointer",
        }}
      >
        اكتمال
      </button>

      <button
        onClick={() => 
          setTitleEdit(task.title) || 
          setDetalsEdit(task.detals) ||
          setShowEditForm(true)}
        style={{
          backgroundColor: "white",
          color: "blue",
          padding: "6px 12px",
          border: "1px solid blue",
          borderRadius: "5px",
          marginLeft: "6px",
          cursor: "pointer",
        }}
      >
        تعديل
      </button>

      <button
        onClick={() => setShowDeleteConfirm(true)}
        style={{
          backgroundColor: "white",
          color: "red",
          padding: "6px 12px",
          border: "1px solid red",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        حذف
      </button>

      {/* ====================== مودال التعديل ====================== */}
      {showEditForm && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={styles.title}>تعديل المهمة</h3>

            <input
              value={titleEdit}
              onChange={(e) => setTitleEdit(e.target.value)}
              style={styles.input}
              placeholder="عنوان المهمة"
            />

            <textarea
              value={detalsEdit}
              onChange={(e) => setDetalsEdit(e.target.value)}
              style={{ ...styles.input, height: "80px" }}
              placeholder="تفاصيل المهمة"
            />

            <div style={styles.btnBox}>
              <button style={styles.cancelBtn} onClick={() => setShowEditForm(false)}>
                إلغاء
              </button>
              <button style={styles.editBtn} onClick={handlEdeit}>
                حفظ التعديل
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================== مودال الحذف ====================== */}
      {showDeleteConfirm && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={styles.title}>حذف المهمة</h3>
            <p style={{ color: "#555" }}>هل أنت متأكد من حذف هذه المهمة؟</p>

            <div style={styles.btnBox}>
              <button style={styles.cancelBtn} onClick={() => setShowDeleteConfirm(false)}>
                لا
              </button>
              <button style={styles.deleteBtn} onClick={handleDelete}>
                نعم، احذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(3px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeIn .2s ease",
  },
  modal: {
    background: "white",
    width: "310px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    animation: "pop .25s ease",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "#222",
    fontWeight: "bold",
  },
  input: {
    width: "95%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  btnBox: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  },
  cancelBtn: {
    background: "transparent",
    border: "none",
    color: "#666",
    padding: "8px 12px",
    cursor: "pointer",
  },
  editBtn: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  }
};
