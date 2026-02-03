import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
const DefaultRoute = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  if (authData) {
    return <Navigate to="/Login" replace />;
  }
  return <Navigate to="/Register" replace />;
  

};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
     {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={route} />;
}
export default App;
