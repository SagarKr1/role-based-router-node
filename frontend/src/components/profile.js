import React, { useEffect } from 'react';
import UserAuth from './userAuth';
import { useNavigate } from 'react-router-dom';
import Circular from './circuler';
import { Box } from '@mui/material';

export default function Profile() {
    let [data, setData] = React.useState({})
    let [loader, setLoader] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
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
    }, [])
    return (
        <div>
            {
                loader ?
                    <Box sx={{display:"flex",flexDirection:"column" ,gap:3}}>
                        <Box>profile</Box>
                        <Box sx={{display:"flex", flexDirection:{xs:"column",sm:"row"}, gap:2}}>
                            <Box>edit</Box>
                            <Box>delete</Box>
                            <Box>change password</Box>
                            <Box>logout</Box>
                        </Box>
                    </Box> :
                    <><Circular /></>
            }
        </div>
    )
}
