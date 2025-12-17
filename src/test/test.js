import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
export default function Tasks({ tasks }) {

  const cardBackgroundColor = "#283593";

  return (
    <div style={{ padding: '20px' }}>

      {tasks.map((task, index) => (
        <Card
          key={index}
          className='todoCared'
          sx={{
            minWidth: 275,
            background: cardBackgroundColor,
            color: "white",
            marginTop: 5,
            borderRadius: '8px'
          }}
        >
          <CardContent>
            <Grid container spacing={2} justifyContent="space-between" alignItems="center">

              <Grid item xs={8}>
                <Typography variant='h5' sx={{ textAlign: "right", fontWeight: 'bold' }}>
                  {task.title}
                </Typography>

                <Typography variant='h6' sx={{ textAlign: "right", fontWeight: 'bold' }}>
                  {task.description}
                </Typography>
              </Grid>

              <Grid item xs={4} sx={{ display: 'flex', gap: 1 }}>
                <IconButton className='iconBut'
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #4CAF50",
                    color: "#4CAF50"
                  }}>
                  <CheckIcon />
                </IconButton>

                <IconButton className='iconBut'
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #FF9800",
                    color: "#FF9800"
                  }}>
                  <CreateIcon />
                </IconButton>

                <IconButton className='iconBut'
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #F44336",
                    color: "#F44336"
                  }}>
                  <DeleteIcon />
                </IconButton>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      ))}

    </div>
  );
}



setTask((prevTasks) =>
    prevTasks.map((task) =>
      task.id ===id
        ? { ...task, isComblet: true }   // تعديل المهمة المطلوبة فقط
        : task
    )
  );