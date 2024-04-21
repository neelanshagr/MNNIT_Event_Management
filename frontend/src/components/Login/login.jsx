import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginUser = (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter a valid email address");
    } else if (password === "") {
      alert("please enter your password");
    } else if (password.length < 6) {
      alert("Password must contain at least 6 letters");
    } else {
      console.log("user login successfully");
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are glad you are back. Please login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setVal}
                name="email"
                id="email"
                placeholder="Enter your Email Address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={inpval.password}
                  onChange={setVal}
                  id="password"
                  placeholder="Enter your password"
                />
                {/* Show/hide password button */}
                <div
                  className="showpass"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button className="btn" onClick={loginUser}>
              Login
            </button>
            <p>
              Dont have an account? - <a href="/register">SignUp</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
