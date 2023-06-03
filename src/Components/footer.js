import {Typography,Box,Divider} from '@mui/material'
import Stack from '@mui/material/Stack';
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <Stack direction="column" spacing={5} sx={{justifyContent:"center" , backgroundColor:"gray", padding:"40px", color:"white"}}>
<Stack direction={{ xs: "column", sm: "row" }} spacing={10} sx={{justifyContent:"center" }}>
  <Box width={{xs:"10em",sm:"15em"}} sx={{p:"1em"}}>
          <Typography variant='h5' align='center'>Contact Us</Typography>
          <Stack direction="column" spacing={2} sx={{justifyContent:"center",marginTop:"20px"}}>
          <Typography variant='body1'>Contact No. : 9305274045  | 6393171082 </Typography>
          <Typography variant='body1'>Email : mohdshahwaz4045@gmail.com</Typography>
          </Stack>
  </Box>  
  <Box width={{xs:"100vw",sm:"25vw"}}sx={{p:"1em"}}>
          <Typography variant='h5' align='center'>Our Services</Typography>
          <Stack direction="column" spacing={2} sx={{justifyContent:"center",marginTop:"20px"}}>
          <Typography variant='body1'>At Travel Company, we offer a range of services to make your travels easier and more enjoyable.</Typography>

          </Stack>
  </Box>
    <Box width={{xs:"100vw",sm:"25vw"}}sx={{p:"1em"}}>
          <Typography variant='h5' align='center'>Developer</Typography>
          <Stack direction="column" spacing={2} sx={{justifyContent:"center",marginTop:"20px"}}>
          <Typography variant='body1'>This website is developed by MIGZ developers. If you want to developthis types of website You can contact me</Typography>
          <Typography variant='body1'>Contact No. : 9305274045 or 6393171082 </Typography>
          <Typography variant='body1'>Email : mohdshahwaz4045@gmail.com</Typography>
          </Stack>
    </Box>
    <Box width={{xs:"100vw",sm:"25vw"}} sx={{p:"1em"}}>
          <Typography variant='h5' align='center'>Follow Us</Typography>
          <Stack direction="row" spacing={2} sx={{marginTop:"20px"}} >
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
          </Stack>
    </Box>
</Stack>
  <Divider color="white"/>
<Stack direction="row" spacing={2} sx={{justifyContent:"center" , backgroundColor:"gray", color:"white"}}>

<Typography variant='body1'>All rights reserved @2023</Typography>
</Stack>
</Stack>
      
  )
}

export default Footer
