import * as React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../contaxt/TasksContext';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';




export default function Tasks({ task ,handlOpen ,handlOpenEdit}) {


  const { tasks, setTask } = useContext(TasksContext);




function handlOpenModelClick() {
  handlOpen(task);
}
function handleOpenEdiClick() {
  handlOpenEdit(task);
}
  
  function handlercheckCliek() {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, isComblet: !t.isComblet } : t
    );
    setTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
 
 

  const cardBackgroundColor = "#283593";

  return (
    <div style={{ padding: '20px' }}>
      {/* edit model */}
     
      {/* --- edit model--- */}
      
      <Card
        sx={{
          minWidth: 275,
          background: cardBackgroundColor,
          color: "white",
          marginTop: 3,
          borderRadius: '8px'
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >

            {/* النصوص تأخذ المساحة كاملة بما يناسبها */}
            <Grid item xs>
              <Typography variant='h5' sx={{ textAlign: "right", fontWeight: 'bold', wordBreak: 'break-word' }}>
                {task.title}
              </Typography>
              <Typography variant='h6' sx={{ textAlign: "right", wordBreak: 'break-word' }}>
                {task.Description}
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: 'flex',
                gap: 1,
                marginLeft: 1,
                flexShrink: 0
              }}
            >
              <IconButton
                onClick={handlercheckCliek}
                sx={{
                  backgroundColor: task.isComblet ? "#4CAF50" : "white",
                  border: "1px solid #4CAF50",
                  color: task.isComblet ? "white" : "#4CAF50"
                }}
              >
                <CheckIcon />
              </IconButton>

              <IconButton
                onClick={() => {
  // setEditTitle(task.title);
  // setEditDescription(task.Description);
  handleOpenEdiClick();
}}

                sx={{
                  backgroundColor: "white",
                  border: "1px solid #FF9800",
                  color: "#FF9800"
                }}
              >
                <CreateIcon />
              </IconButton>

              <IconButton
                onClick={() => handlOpenModelClick()}
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #F44336",
                  color: "#F44336"
                }}
              >
                <DeleteIcon  />
              </IconButton>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
