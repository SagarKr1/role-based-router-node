import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import Typography from '@mui/material/Typography';

export default function Login() {

    const navigate = useNavigate();

    const [SignIn,setSingIn] =  React.useState({
        "email":"",
        "password":""
    })

    const onchange = (e) => {
        const { name, value } = e.target;
        setSingIn({
            ...SignIn,
            [name]: value
        })
    }

    const signin = async () => {
        console.log(SignIn);
        if(SignIn.email!=="" && SignIn.password!==""){
            const login = await axios.post("http://localhost:4000/login/post",SignIn);
            console.log(login.data.body);
            if(login.data.status===200){
                await localStorage.setItem('token',login.data.body);
                toast.success("Login successfully");
                navigate('/profile');
            }else{
                toast.success("Login failed");
            }
        }else{
            toast.warn("Field should not be empty");
        }
    }

    return (
        <div style={{ padding: "100px 0 0 0" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "" }}>
                <Card sx={{ bgcolor: "", width: { md: "550px", sm: "450px" } }}>
                    <CardContent sx={{ display: "flex", justifyContent: "center", bgcolor: "#008DDA" }}>
                        <Typography sx={{ fontSize: "30px" }}>
                            Sign In
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <TextField name="email" value={SignIn.email} onChange={onchange} id="filled-basic" label="E-mail" variant="filled" />
                        <TextField name="password" value={SignIn.password} onChange={onchange} id="filled-basic" label="Password" variant="filled" />
                        <Box sx={{ display: "flex", justifyContent: { sm: "space-between" }, flexDirection: { xs: "column", sm: "row" } }}>
                            <Typography>
                                <Link href="#"> Forgot Password ?</Link>
                            </Typography>
                            <Typography>
                                Create account <Link href="/signup">Signup</Link>
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        {/* <Link href="#"> */}
                            <Button onClick={()=>signin()} sx={{ bgcolor: "#F5DD61" }}>Sign In</Button>
                        {/* </Link> */}
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
