import React ,  { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import UserAuth from './userAuth';

export default function Navbar(props) {
    console.log("role ",props.role);
    const userData = async()=>{
        return await UserAuth;
    }
    console.log("UserData = ",userData);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {
                        props.role === "user"? 
                        <></>
                        :
                        <NavLink to="/user"><Button color="inherit" sx={{color:"white"}}>Users</Button></NavLink>
                    }
                    <NavLink to="/profile"><Button color="inherit"><Avatar alt="Remy Sharp" /></Button></NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}