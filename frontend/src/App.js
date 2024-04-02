import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import User from "./components/user";

function App() {
  const auth = "user"
  return (
    <>
      <Routes>
        {
          auth === "admin" ? <>
            <Route path="/" element={<Profile />} />
            <Route path="user" element={<User />} />
          </> : <>
            <Route path="/" element={<Profile />} />
          </>
        }
        <Route path="/*" element={<>Not correct</>} />
      </Routes>
    </>
  );
}

export default App;
