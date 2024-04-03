import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import User from "./components/user";
import Navbar from './components/navbar';
import { useNavigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import { jwtDecode } from 'jwt-decode';
function App() {
  let auth = ""
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  console.log(token);
  if (token == null) {
    console.log("Token is null");
    auth = false
  } else {
    const decoded = jwtDecode(token);
    if (decoded === undefined) {
      console.log("Token is undefined");
      auth = false
    } else {
      console.log("decode ", decoded);
      auth = decoded.role;
    }
  }
  let mainRoute = ""
  switch (auth) {
    case "admin":
      mainRoute = <>
        <Route path="/profile" element={<Profile />} />
        <Route path="user" element={<User />} />
      </>
      break;

    case "user":
      mainRoute = <>
      <Route path="/profile" element={<Profile />} />
    </>
      break;

    default:
      mainRoute = <>
      </>
      break;
  }
  // useEffect(() => {
  //   function checkLogin() {
  //     if (!auth) {
  //       navigate('/')
  //     }
  //   }
  //   checkLogin()
  // }, [navigate])
  return (
    <>
      {
        auth ? <Navbar role={auth} /> : <></>
      }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        {
          mainRoute
        }
        <Route path="/*" element={<>Page Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
