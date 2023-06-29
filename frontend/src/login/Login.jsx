import { useState } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [mobile, setMobile] = useState("");

  // validate value
  const numberHandler = (val) => {
    const validatedValue = val.replace(/[^0-9]/g, "");
    setMobile(validatedValue);
  };

  return (
    <>
      <div className="bod">
        <form className="form">
        <br />
          <br />
          <br />
          <br />
          <br />
          
          <h1>Sign in to 2geda</h1>
        
          
          <br />
          <br />

          <label htmlFor="username">Username</label>
          <br />
          <input id="username" type="text" />
          <br />
          <br />


          <label htmlFor="password">Password</label>
          <br />
          <input id="password" type="password" />
          <br />
          <br />
         
          <br />
        
          
         

          <button className="btn">Log in</button>
          <br/>
          <br/>
          <button className="btn-u">Forgot password?</button>
          <br/>

          <br/>
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
    </>
  );
};

export default Register;
