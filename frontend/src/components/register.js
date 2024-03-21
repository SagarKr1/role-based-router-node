import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

export default function Register() {
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
                        <TextField id="filled-basic" label="E-mail" variant="filled" required />
                        <TextField id="filled-basic" label="Name" variant="filled" required />
                        <TextField id="filled-basic" label="Phone Number" variant="filled" required />
                        <TextField id="filled-basic" label="Password" variant="filled" required />
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Typography>
                                <Link href="/">Sign In</Link>
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Link href="/">
                            <Button sx={{ bgcolor: "#F5DD61" }}>Sign Up</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
