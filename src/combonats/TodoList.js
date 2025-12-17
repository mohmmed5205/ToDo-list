import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tasks from './Tasks';
import tasksReduced from '../Reducers/tsaksReduced';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState, useContext, useEffect , useMemo , useReducer} from 'react';
import { TasksContext } from '../contaxt/TasksContext';
import { v4 as uuidv4 } from "uuid";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { type } from '@testing-library/user-event/dist/type';

export default function TodoList() {
  const [tasks, dispatch] = useReducer(tasksReduced,[]);
  const { tasks2, setTask } = useContext(TasksContext);
  const [titleInput, setTitleInput] = useState("");
  const [flter, setFilter] = useState("all");
  const[taskId,setTaskId]=useState(null);
  const [DescriptionInput, setDescriptionInput] = useState("");
    const[showdeletmodel,setshowdeletmodel]=useState(false);
  const[showEditModel,setShowEdeitModel]=useState(false);
    const [editTitle, setEditTitle] = useState("");
    
const [editDescription, setEditDescription] = useState("");


  // --- جلب المهام من اللوكل ستورج عند أول تحميل ---
  useEffect(() => {
  dispatch({ type: "git" });
  }, []);

 

  // --- إضافة مهمة جديدة ---
  function handlerAddBut() {
    dispatch({
      type: "add",
      payload: {
        titleInput: titleInput,
        DescriptionInput: DescriptionInput,
      },
    })

     setTitleInput("");
    setDescriptionInput("");
  }

  const filterTasks = useMemo(()=>{
    return tasks.filter ((task)=>{
    if( flter=== "comblet"){
      return task.isComblet;
    } else if (flter === "uncomblet"){
      return !task.isComblet;
    } else {
      return true;
    } 
  })
  } , [tasks, flter]);

  const tasksJsx = filterTasks.map((task) => <Tasks handlOpenEdit={handlOpenEdit} handlOpen={handlOpen} key={task.id} task={task} />);

  // ---  موديل الحذف ---
 function handleClose() {
    setshowdeletmodel(false);
  } 
function handlOpen(task) {
  setTaskId(task)
    setshowdeletmodel(true);
  }
  function handleDelete() {
    dispatch({
      type: "delete",
      payload: {
        taskId: taskId
      },
    })
    setshowdeletmodel(false); 
  }


// --- موديل التعديل ---
       function handleCloseEdit() {

    setShowEdeitModel(false);
  }

function handlOpenEdit(task) {
  setTaskId(task);
  setEditTitle(task.title);
  setEditDescription(task.Description);
  setShowEdeitModel(true);
}

  function handleEdit() {
dispatch({
  type:"edit",
  payload:{
    taskId:taskId,
    editTitle:editTitle,
    editDescription:editDescription,
  }
})
  setShowEdeitModel(false);
}

  return (
  <>
 <Dialog
      style={{direction:"rtl"}}
        open={showEditModel}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"تعديل المهمه"}
        </DialogTitle>
        <DialogContent>
          {/* edie input  */}
          <TextField 
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          id="outlined-basic" label="عنوان المهمه" variant="outlined" />
      <TextField 
      value={editDescription}
      onChange={(e) => setEditDescription(e.target.value)}
      id="filled-basic" label="وصف المهمه" variant="filled" />
          {/* ---edit input--- */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>الغاء</Button>
          <Button
            onClick={handleEdit}
             autoFocus>
            تعديل
          </Button>
        </DialogActions>
      </Dialog>


  <Dialog style={{direction:"rtl"}} 
  open={showdeletmodel}
   onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" > <DialogTitle id="aler t-dialog-title"> {"حذف المهمة "} </DialogTitle> <DialogContent> <DialogContentText id="alert-dialog-description"> هل أنت متأكد من حذف هذه المهمة؟ </DialogContentText> </DialogContent> <DialogActions>
     <Button
      onClick={handleClose}>
    الغاء</Button> <Button onClick={handleDelete} autoFocus>  .حذف </Button> </DialogActions> </Dialog>
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          <Typography variant='h2' gutterBottom sx={{ color: 'text.secondary' }}>
            مهامي
          </Typography>

          <Divider sx={{ marginBottom: 2 }} />

          <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
            <Button 
            onClick={()=> setFilter("all")}
            variant="text" fullWidth>الكل</Button>
            <Button 
            onClick={()=> setFilter("comblet")}
            variant="contained" fullWidth>المهام المنجزه</Button>
            <Button 
            onClick={()=> setFilter("uncomblet")}
            variant="outlined" fullWidth>المهام غير المنجزه</Button>
          </Stack>

          {/* عرض المهام */}
          {tasksJsx}

          {/* إضافة مهمة جديدة */}
          <Card sx={{ mt: 2, p: 2, borderRadius: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <div>
                  <TextField
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    label="عنوان المهمة"
                    fullWidth
                    multiline
                    sx={{ mb: 1 }}
                  />

                  <TextField
                    value={DescriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                    label="وصف المهمة"
                    fullWidth
                    multiline
                  />
                </div>
              </Grid>

              <Grid item xs="auto">
                <Button
                  onClick={handlerAddBut}
                  variant='contained'
                  size="large"
                  sx={{ height: '100%' }}
                >
                  إضافة
                </Button>
              </Grid>
            </Grid>
          </Card>

        </CardContent>
      </Card>
    </Container>
  </>);
}
