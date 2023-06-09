import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function contact() {
  return (
     <Box id="contact" sx={{backgroundColor:"lightgray",padding:"2rem"}}>
        <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ mt: "1em", mb: "1em" }}
      >
       Contact Us
      </Typography>
      <Card style={{maxWidth:"40rem" , margin:"0 auto", padding:"10rem 5rem"}}>
        <CardContent>
          <form >
           <Grid container spacing={2}>
            <Grid xs={12}  item>
              <TextField label="First Name" placeholder='Enter Your first name' variant='outlined' fullWidth required />  
            </Grid>
            <Grid xs={12}  item>
              <TextField label="Last Name" placeholder='Enter Your last name' variant='outlined' fullWidth required/>
            </Grid>
            <Grid item xs={12}>
                <TextField type='email' label="Email" placeholder='Enter Your Email' variant='outlined' fullWidth required/>
            </Grid>
            <Grid item xs={12}>
                <TextField type='number' label="Phone" placeholder='Enter Your phone number' variant='outlined' fullWidth required/>
            </Grid>
              <Grid item xs={12}>
                <TextField label="Message" multiline rows={4}  placeholder='Enter your message here' variant='outlined' fullWidth required/>
            </Grid>
            <Grid item xs={12}>
                  <Button type='submit' variant='contained' color='primary' sx={{justifyContent:"center"}}>Submit</Button>
            </Grid>
           </Grid>
           </form>
        </CardContent>
      </Card>
     </Box>
  )
}

export default contact
