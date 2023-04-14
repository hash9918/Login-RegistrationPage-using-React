import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPass: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register = async () => {
    const { name, email, password, reEnterPass } = user;
    if (name && email && password) {
      if (password === reEnterPass) {
        await axios
          .post("http://localhost:8080/register", user)
          .then((res) => alert(res.data));
        history("/login");
      } else {
        alert("password do not match");
      }
    } else {
      alert("fill all the details");
    }
  };
  return (
    <div className="register">
      <h1>Login</h1>

      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
        autoComplete="off"
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        autoComplete="off"
      ></input>

      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
        autoComplete="off"
      ></input>
      <input
        type="password"
        name="reEnterPass"
        value={user.reEnterPass}
        onChange={handleChange}
        placeholder="ReEnter your Password"
        autoComplete="off"
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history("/login")}>
        Login
      </div>
    </div>
  );
}

export default Register;
