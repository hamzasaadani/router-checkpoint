
   
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/profile/:iduser" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
