import React, { useState } from "react";
import Homepage from "./components/Homepage.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* {user && user._id ? (
            <Route path="/" Component={Homepage} />
          ) : (
            <Route path="/login" Component={Login} />
          )} */}
          {/* <Route path="/" Component={user && user._id ? Homepage : Login} /> */}
          <Route
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} user={user} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />

          <Route
            path="/login"
            Component={() => <Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
