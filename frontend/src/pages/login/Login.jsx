import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery } from '@tanstack/react-query'

const Login = () => {
  const [inputs, setinputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const { login } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate('/')
    } catch (err) {
      setErr(err.response.data);
    }


  };

  /** 
    const [mobile, setMobile] = useState("");
  
    // validate value
    const numberHandler = (val) => {
      const validatedValue = val.replace(/[^0-9]/g, "");
      setMobile(validatedValue);
    };
  */
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

              <input placeholder="Username" id="username" type="text" name="username" onChange={handleChange} />
              <br />
              <br />

              <input placeholder="Password" id="password" type="password" name="password" onChange={handleChange} />
              <br />
              <div className="error">{err && err}</div>
        
              <button className="btn" onClick={handleLogin}>Log in</button>
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
