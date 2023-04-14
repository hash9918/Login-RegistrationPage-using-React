import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const login = async () => {
    const { email, password } = user;
    if (email && password) {
      await axios.post("http://localhost:8080/login", user).then((res) => {
        // alert(res.data);
        alert(res.data.message);
        console.log(res);
        setLoginUser(res.data.user);
        history("/");
      });
    } else {
      alert("fill in the details ");
    }
  };
  const navhis = () => {
    history("/register");
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>

      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={navhis}>
        Register
      </div>
    </div>
  );
}

export default Login;
