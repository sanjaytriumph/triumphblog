import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import LoggedinContext from "../loggedin-context";

const Logout = () => {
  const { loggedin, setLoggedin } = useContext(LoggedinContext);
  sessionStorage.removeItem("loggedIn");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("role");
  useEffect(() => {
    setLoggedin("false");
  }, []);
  let submitted = true;
  if (submitted) {
    return (
      <Redirect
        push
        to={{
          pathname: "/",
        }}
      />
    );
  }
  return (
    <>
      <div className="text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Logout;
