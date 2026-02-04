import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
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
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <h1>This is Dashboard.</h1>
    </div>
  );
};

export default Dashboard;
