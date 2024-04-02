import {React, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import User from "./components/user";
import Navbar from './components/navbar';
import Login from "./components/login";
import Register from "./components/register";
import { jwtDecode } from 'jwt-decode';
import {  useNavigate } from 'react-router-dom';
function App() {
  const navigation = useNavigate()
  let auth = ""
  const token = localStorage.getItem("token");
  console.log(token);
  if (token == null) { 
} else {
    const decoded = jwtDecode(token);
    if (decoded === undefined) { 
    } else {
        console.log("decode ", decoded);
        auth = decoded.role;
        // useEffect(()=>{
        //   navigation('/profile');
        // },[])
        navigation('/profile');
    }
}
  return (
    <>
      <Navbar role={auth} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        {
          auth === "admin"
            ? <>
              <Route path="/profile" element={<Profile />} />
              <Route path="user" element={<User />} />
            </>
            : <>
              <Route path="/profile" element={<Profile />} />
            </>
        }
        <Route path="/*" element={<>Not correct</>} />
      </Routes>
    </>
  );
}

export default App;
