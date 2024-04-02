import React ,  { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import UserAuth from './userAuth';
import { useNavigate } from 'react-router-dom';
import Circular from './circuler';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    let [data, setData] = React.useState({});
    const navigate = useNavigate();
    let [loader, setLoader] = React.useState(false);
    React.useEffect(()=>{
        async function UserData() {
            let value = await UserAuth();
            console.log("Data ", value);
            if (value.email !== "" && value.role !== "") {
                setData(value);
                setLoader(true);
                console.log(data);
            } else {
                navigate('/')
            }
        }
        UserData();
    },[]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                loader ?
                <>
                </>
                : <><Circular/></>
            }
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {
                        data.role === "user"? 
                        <></>
                        :
                        <Link href="/user"><Button color="inherit" sx={{color:"white"}}>Users</Button></Link>
                    }
                    <Link href="/profile"><Button color="inherit"><Avatar alt="Remy Sharp" /></Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}