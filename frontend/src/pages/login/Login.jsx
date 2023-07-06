import { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {

  const { login } = useContext(AuthContext);


  const handlelogin = () => {
    login();
  }

  const [mobile, setMobile] = useState("");

  // validate value
  const numberHandler = (val) => {
    const validatedValue = val.replace(/[^0-9]/g, "");
    setMobile(validatedValue);
  };

  return (
    <>
      <div className="wrapper">
        <div className="curv">
          <Link to="/">
            <span className="log">2geda</span>
          </Link>
          <div className="bod">
            <form className="form" >


              <h1>Welcome back.</h1>


              <br />

              <input placeholder="Username" id="username" type="text" />
              <br />
              <br />

              <input placeholder="Password" id="password" type="password" />
              <br />
              <button className="btn" onClick={handlelogin}>Log in</button>
              <br />
              <br />
              <button className="btn-u">Forgot password?</button>
              <br />

              <br />
              <span>Don't you have an account? <Link to="/register" > Sign up</Link> </span>

            </form>
            <div className="aside">
              <br />
              <br />
              <br />
              <div className="aside-bg"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
