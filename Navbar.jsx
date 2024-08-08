import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
    <Box sx={{ flexGrow: 0 }}>
   <AppBar position="static">
     <Toolbar>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         PRODUCT APP
       </Typography>

       <Button ><Link 
       to={'/'}
        style={{ color:"white"}}>
        Dashboard
         </Link>
         </Button>
         <Button ><Link 
       to={'/a'}
        style={{ color:"white"}}>
        Add Product
         </Link>
         </Button>
     </Toolbar>
   </AppBar>
 </Box>
 </div>
  );
};

export default Navbar;