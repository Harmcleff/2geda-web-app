import { useState } from "react";
import "./login.scss";
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
    <div className="wrapper">
      <div className="bod">
        <form className="form" >
         

          <h1>Sign in to 2geda</h1>


          <br />
          
          <input placeholder="Username" id="username" type="text" />
          <br />
          <br />

          <input placeholder="Password" id="password" type="password" />
          <br />
          <button className="btn">Log in</button>
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
    </>
  );
};

export default Register;
