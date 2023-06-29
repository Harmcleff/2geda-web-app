import { useState } from "react";
import "../styles/App.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  //const [mobile, setMobile] = useState("");
  const [err, setErr] = useState(null)
  const [inputs, setinputs] = useState({
    username:"",
    email:"",
    dob:"",
    number:"",
    password:"",
    name:"",
    gender:"",
  });
  
  const handleChange = (e) =>{
    setinputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  
  const handleClick = async (e) =>{
    e.preventDefault();
    
    try{
      await axios.post("http://localhost:8800/api/v1/auth/register", inputs)
    } catch (err) {
      setErr(err.response.data)
    }
    
  };

  // validate value
  /**const numberHandler = (val) => {
    const validatedValue = val.replace(/[^0-9]/g, "");
    setMobile(validatedValue);
  };*/
  
  console.log(err)
  

  return (
    <>
    <div className="wrapper">
      <div className="bod">
        <form className="form">
          <h1>Create an Account</h1>
          <p>It's quick and easy.</p>
          <br />
          <br />
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" type="text" name="name" onChange={handleChange} />
          <br />
          <br />

          <label htmlFor="username">Username</label>
          <br />
          <input id="username" type="text" name="username" onChange={handleChange} />
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="text" name="email" onChange={handleChange}/>
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input id="password" type="password" name="password" onChange={handleChange} />
          <br />
          <br />
          <div className="inner">
          <label htmlFor="gender">Gender: </label> 
          <select name="gender" onChange={handleChange} id="gender">
            <option value="Male" name="gender"  >Male</option>
            <option value="Female" name="gender" >Female</option>
          </select>
          <br /> <br />

          <label htmlFor="dob">Date of Birth</label>
         
          <input id="dob" type="date" name="dob" onChange={handleChange}/></div>
          <br />
        
          <label htmlFor="number">Phone Number</label>
          <br />
          <input
            id="number"
            name="number"
            type="tel"
            onChange={handleChange}
            
          />
          <br />
          <br />
          {err && err}
          <button className="btn" onClick={handleClick}>Sign up</button>
          <br/>
          <br/>
          <span>Have an account already? <Link to="/login"> Log in</Link> </span> 
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
