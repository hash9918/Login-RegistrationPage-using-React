import React from "react";

function Homepage({ setLoginUser, user }) {
  console.log(user.name);
  const logout = () => {
    setLoginUser({});
  };

  return (
    <div className="homepage">
      <h1>Hello {user.name} </h1>
      <div className="button" onClick={logout}>
        Logout
      </div>
    </div>
  );
}

export default Homepage;
