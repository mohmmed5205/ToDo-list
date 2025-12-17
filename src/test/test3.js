import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

export default function Tasks({task ,handlercheck}) {
  
    function handlercheckCliek(){
     const updatedTasks = tasks.map((t) => {
         if (t.id === tasks.id) {
           return {...task,isComblet: !task.isComblet};
         }
         return task;
       });
     
       setTask(updatedTasks);
     }
    }
    const cardBackgroundColor = "#283593"; 

    return (
   <div style={{ padding: '20px' }}> 
      

    <Card 
    className='todoCared'
    sx={{ 
       minWidth: 275,
        background: cardBackgroundColor,
        color: "white", 
        marginTop: 5,
        borderRadius: '8px' 
         }}>
  <CardContent>
       <Grid container spacing={2} display="flex" justifyContent="space-between" alignItems="center">
        {/* المهام */}
         <Grid item xs={8}> 
        <Typography variant='h5' sx={{ textAlign: "right", fontWeight: 'bold' }}>
           {task.title}
       </Typography>
        <Typography variant='h6' sx={{ textAlign: "right", fontWeight: 'bold' }}>
         {task.Description}
       </Typography>
     </Grid>
     {/* -----المهام----- */}
   <Grid item xs={4} sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start' }}> 
      {/* الازرار الجانبيه */}
      {/* check button */}
       <IconButton 
       onClick={()=>{
    handlercheckCliek()

       }}
 className='iconBut'
       sx={{ 
    backgroundColor: task.isComblet ?"#4CAF50" :"white", 
       border: "1px solid #4CAF50", 
    
    
   color:  task.isComblet ? "white":"#"

,
            }} 
              aria-label="complete"
           >
       <CheckIcon />
   </IconButton>
   {/* ----check button -----*/}
         <IconButton 
         className='iconBut'
      sx={{ 
     backgroundColor: "white",
     border: "1px solid #FF9800",   
     color: "#FF9800",    
       
        }}
    aria-label="edit"
    >
    <CreateIcon />
    </IconButton>
     <IconButton 
     className='iconBut'
       sx={{ 
            backgroundColor: "white", 
          border: "1px solid #F44336",  
        color: "#F44336", 
      '&:hover': { backgroundColor: '#9c4747ff' }
          }}
          aria-label="delete"   >
        <DeleteIcon />
        </IconButton>
         </Grid>
        {/* الازرار الجانبيه */}
    
      </Grid>
        </CardContent>
     </Card>
        </div>
    );
}