import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Typography from '@mui/material/Typography';

export default function Register() {

    const navigate = useNavigate();

    const [SignUp, setSignUp] = React.useState({
        "email": "",
        "name": "",
        "phone": "",
        "password": "",
        "role":"user"
    })

    const onchange = (e) => {
        const { name, value } = e.target;
        setSignUp({
            ...SignUp,
            [name]: value
        })
    }

    const signup = async () => {
        console.log(SignUp);
        if (SignUp.name !== "" && SignUp.email !== "" && SignUp.password !== "" && SignUp.phone !== "" && SignUp.role!=="") {
                // const formateData = {
                //     "name": SignUp.name,
                //     "email": SignUp.email,
                //     "password": SignUp.password,
                //     "role":SignUp.role
                // }
                const upload = await axios.post('http://localhost:4000/signup/post', SignUp);
                console.log(upload.data.status);
                if (upload.data.status === 200) {
                    toast.success("Account created successfully");
                    navigate('/');
                } else {
                    setSignUp({
                        "email": "",
                        "name": "",
                        "phone": "",
                        "password": ""
                    })
                    toast.warning(upload.data.body);
                }
        } else {
            toast.warn("Text should not be empty");
        }
    }
    return (
        <div style={{ padding: "100px 0 0 0" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "" }}>
                <Card sx={{ bgcolor: "", width: { md: "550px", sm: "450px" } }}>
                    <CardContent sx={{ display: "flex", justifyContent: "center", bgcolor: "#008DDA" }}>
                        <Typography sx={{ fontSize: "30px" }}>
                            Sign Up
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <TextField name="email" value={SignUp.email} onChange={onchange} id="filled-basic" label="E-mail" variant="filled" required />
                        <TextField name="name" value={SignUp.name} onChange={onchange} id="filled-basic" label="Name" variant="filled" required />
                        <TextField name="phone" value={SignUp.phone} onChange={onchange} id="filled-basic" label="Phone Number" variant="filled" required />
                        <TextField name="password" value={SignUp.password} onChange={onchange} id="filled-basic" label="Password" variant="filled" required />
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Typography>
                                <Link href="/">Sign In</Link>
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        {/* <Link href="/"> */}
                            <Button onClick={() => signup()} sx={{ bgcolor: "#F5DD61" }}>Sign Up</Button>
                        {/* </Link> */}
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
