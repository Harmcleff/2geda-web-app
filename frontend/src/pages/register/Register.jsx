import { useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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


  const navigate = useNavigate()
  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://2geda.tech/api/v1/auth/register", inputs)
      navigate('/login')
    } catch (err) {
      setErr(err.response.data)
    }

  };

  // validate value
  /**const numberHandler = (val) => {
    const validatedValue = val.replace(/[^0-9]/g, "");
    setMobile(validatedValue);
  };*/

  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true);
  }

  const error = ["Name should be 3-16 characters and shouldn't include any special character!",
    "Username should be 3-16 characters!",
    "It should be a valid email address!",
    "Minimum six characters, at least one letter and one number!",
    "Enter a valid Phone Number!"
  ]
  console.log(err)


  return (
    <>

      <div className="wrapper">
        <div className="curv">
          <Link to="/">
            <span className="log">2geda</span>
          </Link>
          <div className="bod">
            <form onSubmit={handleClick} className="form">
              <h1>Create an Account</h1>
              <p>It's quick and easy.</p>
              <br />


              <input id="name" required placeholder="Name" type="text" name="name" onChange={handleChange}
                onBlur={handleFocus}
                focused={focused.toString()}
              />

              <br />
              <br />



              <input id="username" required placeholder="Username" type="text" name="username" onChange={handleChange}
                onBlur={handleFocus}
                focused={focused.toString()}
              />

              <br />
              <br />



              <input id="email" required placeholder="Email" type="email" name="email"
                onBlur={handleFocus}
                focused={focused.toString()}
                onChange={handleChange} />

              <br />
              <br />


              <input id="password" placeholder="Password" required type="password" name="password"
                onBlur={handleFocus}
                focused={focused.toString()}
                onChange={handleChange} />
              <br /><br />


              <div className="inner">
                <label htmlFor="gender">Gender: </label>
                <select required name="gender" onChange={handleChange} id="gender">
                  <option value="Male" name="gender"  >Male</option>
                  <option value="Female" name="gender" >Female</option>
                </select>
                <br />

                <label htmlFor="dob">Date of Birth</label>

                <input id="dob" required type="date" name="dob" onChange={handleChange} /></div>

              <br />

              <input
                placeholder="Phone Number"
                id="number"
                name="number"
                type="tel"
                onChange={handleChange}
                required
                pattern="[0-9]{9,12}$"
                onBlur={handleFocus}
                focused={focused.toString()}

              />
              <br />
              <br />
              <div className="error">{err && err}</div>

              <button className="btn">Sign up</button>
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
      </div>

    </>
  );
};

export default Register;
