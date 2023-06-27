import { useState } from "react";
import "../styles/App.css";
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
          <h1>Login</h1>
          <p id>It's quick and easy.</p>
          
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
        
          
         

          <button className="btn">LOG IN</button>
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
