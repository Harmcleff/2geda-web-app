import { useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  //const [mobile, setMobile] = useState("");
  const [err, setErr] = useState(null)
  const [inputs, setinputs] = useState({
    username: "",
    email: "",
    dob: "",
    number: "",
    password: "",
    name: "",
    gender: "",
  });

  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
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

            <input id="name" required placeholder="Name" type="text" name="name" onChange={handleChange} />
            <br />
            <br />


       
            <input id="username" required placeholder="Username" type="text" name="username" onChange={handleChange} />
            <br />
            <br />


          
            <input id="email" required placeholder="Email" type="text" name="email" onChange={handleChange} />
            <br />
            <br />


            <input id="password" placeholder="Password" type="password" name="password" onChange={handleChange} />
            <br />
            <br />
            <div className="inner">
              <label htmlFor="gender">Gender: </label>
              <select name="gender" onChange={handleChange} id="gender">
                <option value="Male" name="gender"  >Male</option>
                <option value="Female" name="gender" >Female</option>
              </select>
              <br /> 

              <label htmlFor="dob">Date of Birth</label>

              <input id="dob" type="date" name="dob" onChange={handleChange} /></div>
            <br />


            <input
              placeholder="Phone Number"
              id="number"
              name="number"
              type="tel"
              onChange={handleChange}

            />
            <br />
            
            {err && err}
            <button className="btn" onClick={handleClick}>Sign up</button>
            <br />
            <br />
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
