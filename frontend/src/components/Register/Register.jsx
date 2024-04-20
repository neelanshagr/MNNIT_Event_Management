import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import  '../Login/login.css'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, setcShowPassword] = useState(false);

  const [inpval, setInpval] =  useState({
    fname:"",
    email:"",
    password:"",
    cpassword:""
  })

  // console.log(inpval);

  const setVal= (e)=>{
    // console.log(e.target.value);
    const {name,value} =e.target;
    
    setInpval(()=>{
      return {
        ...inpval,
        [name]:value
      }
    })
  };

  const addUserdata =  (e) =>{
    e.preventDefault();

    const {fname, email, password, cpassword} =inpval;

    if(fname === ""){
      alert('please enter your full name');
    }
    else if(email === ""){
      alert("please enter your email");
    }
    else if(!email.includes('@')){
      alert('please enter a valid email address')
    }
    else if(password === ""){
      alert("please enter your password");
    }
    else if(cpassword === ""){
      alert("please enter your confirm password");
    }
    else if(password.length<6){
      alert("Password must contain at least 6 letters")
    }
    else if(password !== cpassword){
      alert("password and confirm password do not match")
    }
    else{
      console.log("user registered successfully")
    }
  }

  return (
    <>
      <section>
        <div className="form_data">
        {/* Heading */}
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>We are glad that you are using our website to Host / Attend a Event</p>
          </div>
          <form>
          {/* full name */}
          <div className="form_input">
              <label htmlFor="fname">Full Name</label>
              <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder="Enter your Full Name" />
            </div> 

          {/* Email */}
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder="Enter your Email Address" />
            </div>

            {/* Password */}

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  onChange={setVal}
                  value={inpval.password}
                  placeholder="Enter your password"
                />
                {/* Show/hide password button */}
                <div
                  className="showpass"
                  onClick={() => setShowPassword(prevState => !prevState)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Confirm Password */}


            <div className="form_input">
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={cshowPassword ? 'text' : 'password'}
                  name="Confirm Password"
                  onChange={setVal}
                  id="Confirm Password"
                  value={inpval.cpassword}
                  placeholder="Enter your Confirm Password"
                />
                {/* Show/hide password button */}
                <div
                  className="showpass"
                  onClick={() => setcShowPassword(prevState => !prevState)}
                >
                  {cshowPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUserdata}>Submit</button>
            <p>Already have an account? - <a href="/">Login</a></p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
