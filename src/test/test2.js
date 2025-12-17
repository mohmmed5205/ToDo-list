import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tasks from './Tasks';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import { Description } from '@mui/icons-material';
// import { Description } from '@mui/icons-material';
import { useState } from 'react';
import { useContext } from 'react';
import { TasksContext } from '../contaxt/TasksContext';
import { v4 as uuidv4 } from "uuid";



 
export default function TodoList() {
  const {tasks,setTask}=useContext(TasksContext)
  const [titleInput,setTitleTnput]=useState("")
  
  

  let tasksJsx= tasks.map((task)=>{
    return <Tasks 
   key={task.id}  />
  });
  

  function handlerAddBut(){
    const newTask={
      id:uuidv4(),
      title:titleInput,
      Description:"",
      isComblet:false

    }
    setTask([...tasks,newTask])
    setTitleTnput("")
  }
  return (
     <Container maxWidth="sm">
 <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h2' gutterBottom sx={{ color: 'text.secondary',  }}>
        مهامي
        </Typography>
              <Divider/>
         <Stack spacing={2} direction="row">
      <Button variant="text">الكل</Button>
      <Button variant="contained">المهام المنجزه</Button>
      <Button variant="outlined">المهام غير المنجزه</Button>
    </Stack>
    {/* all tasks */}
    {tasksJsx}
    {/* all tasks */}
    {/* input task */}
    <Grid container spacing={2} >
        <Grid size={8}>
              <TextField
              value={titleInput}
              onChange={(e)=>{
                setTitleTnput(e.target.value)
              }}
              className='inputAdd'
          id="outlined-multiline-flexible"
          label="عنوان المهمه"
          multiline
          maxRows={4}
        />
        </Grid>
        <Grid size={4}>
       <Button 
       onClick={()=>{
        handlerAddBut();
       }}
       className='butAdd'
       size="large" variant='contained'>اضافه</Button>


        </Grid>
        </Grid>
    {/* ----input task---- */}
      </CardContent>
      
    
    </Card>   
       </Container>
  );
}
