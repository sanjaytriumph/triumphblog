import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import LoggedinContext from "../loggedin-context";

const Login = (props) => {
  const { loggedin, setLoggedin } = useContext(LoggedinContext);
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeHandler = (e) => {
    const tid = e.target.id;
    document.getElementById(tid).classList.remove("is-invalid");
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (value.username && value.password) {
      console.log(
        `submitted with the values ${value.username} and ${value.password}`
      );
      axios.get(`${props.apiurl}login`).then((res) => {
        const pdata = res.data;
        //return setPosts(pdata);

        pdata.map((item, index) => {
          if (
            item.username == value.username &&
            item.password == value.password
          ) {
            console.log("good to go");
            //sessionStorage.setItem('loggedin','true');
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("username", item.username);
            sessionStorage.setItem("role", item.role);
            setSubmitted(true);
            setLoggedin(sessionStorage.getItem("loggedIn"));
          } else {
            setError(true);
            setErrorMsg("Invalid Credentials");
          }
        });
      });
    } else {
      setError(true);
      setErrorMsg("Please enter username and password");
    }
    if (value.username == false) {
      document.getElementById("username").classList.add("is-invalid");
    }
    if (value.password == false) {
      document.getElementById("password").classList.add("is-invalid");
    }
  };
  if (submitted) {
    return (
      <Redirect
        push
        to={{
          pathname: "/admin/dashboard",
        }}
      />
    );
  }
  return (
    <>
      <div className="container pt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h5 className="card-header">
                Login{" "}
                <small className="h6">
                  (username: sanjaykumar, password: sanjay123)
                </small>{" "}
              </h5>
              <div className="card-body">
                {error ? (
                  <div className="alert alert-danger">{errorMsg}</div>
                ) : (
                  ""
                )}

                <form onSubmit={onSubmitHandler}>
                  <div className="mb-3">
                    <label for="username" className="form-label">
                      Username
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      id="username"
                      aria-describedby="usernameHelp"
                      name="username"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      autoComplete="off"
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={onChangeHandler}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
