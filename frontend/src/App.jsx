import Register from "./pages/register/Register";
import "./style.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/navbar"
import Leftbar from "./components/leftbar/leftbar"
import Rightbar from "./components/rightbar/rightbar"
import Profile from "./pages/profile/profile"
import Landing from "./pages/landipage/landingpage"
import Error404 from "./pages/Error404/Error404"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModecontext";
import { AuthContext } from "./context/authContext"; 

function App() {
  const {currentUser, login} = useContext(AuthContext);
  
  const {darkMode} = useContext(DarkModeContext);
  
  console.log(currentUser)

  const Layout = () => {
    return (
      <div className={darkMode ? "dark" : "light"} >
        <Navbar />
        <div className="fw" style={{ display: "flex", justifyContent: "center" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

          <Rightbar />
        </div>

      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/home" />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: [
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ],
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },

      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },{
      path: "/home",
      element: <Landing/>,
    },{
      path: "*",
      element: <Error404/>,
    }
  ]);
  return (
    <div>

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
