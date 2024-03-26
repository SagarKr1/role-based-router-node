import React, { useEffect } from 'react';
import UserAuth from './userAuth';
import { useNavigate } from 'react-router-dom';
import Circular from './circuler';
import Navbar from './navbar';

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
                    <div>
                        <Navbar></Navbar>
                    </div> :
                    <><Circular/></>
            }
        </div>
    )
}
