import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import "./Dashboard.css";
const Dashboard = () => {
  const navigate = useNavigate("");
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
   // localStorage.clear()
    navigate('/login')
  };
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <h1>MY TASKS</h1>
      <TaskList/>

     
    </div>
  );
};

export default Dashboard;
