import { Button, TextField, Typography } from '@mui/material';
import React from 'react';


const AddProduct = ()=>{    

  return (
    <div>
       <div style={{marginLeft:"100px" , marginTop:"100px", marginRight:"100px" ,marginBottom:"100px"}}>
 <br /><br />
 <TextField
  id="standard-basic" 
 fullWidth color="primary" 
 label=" Name"
  variant="filled" />
 <br /><br />
 <label htmlFor="">Upload Image : </label><br/><input type="file" /><br /><br />
 <TextField id="outlined"
  label="Price"
  variant="filled"
  fullWidth color="primary" 
  />
 <br /><br />
 <TextField id="filled" 
fullWidth color="primary" 
 label="Category" 
 variant="filled" />
<br /><br />
<Button variant="contained"  >
Submit</Button>
    </div>
       
    </div>
  );
};

export default AddProduct;