import React from "react";

// set the defaults

const LoggedinContext = React.createContext({
  loggedin: sessionStorage.getItem('loggedIn'),
  setLoggedin: () => {}
});

export default LoggedinContext;
