import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export default function Login() {
    return (
        <div>
            <Box sx={{ display: "flex",justifyContent:"center",alignItems:"center"}}>
                <Card sx={{ bgcolor: "red", }}>
                    <CardContent sx={{display: "flex", flexDirection: "column",gap:3}}>
                        <TextField id="filled-basic" label="Filled" variant="filled"  />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                    </CardContent>
                    <CardActions>
                        <Button>Login</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
