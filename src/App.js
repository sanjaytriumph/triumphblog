import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";
import DeletePost from "./components/DeletePost";
import PostByAuthor from "./components/PostByAuthor";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Dashboard from "./pages/Dashboard";
import AddNewPost from "./pages/admin/AddNewPost";
import AllPosts from "./pages/admin/AllPosts";
import EditPostPage from "./pages/admin/EditPostPage";
import PageNotFound from "./pages/PageNotFound";
import LoggedinContext from "./loggedin-context";

function App() {
  const [loggedin, setLoggedin] = useState(sessionStorage.getItem("loggedIn"));
  const value = { loggedin, setLoggedin };
  console.log(loggedin);
  let url = "";
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000/";
  }

  if (process.env.NODE_ENV === "production") {
    url = "https://my-json-server.typicode.com/sanjaytriumph/mockjson/";
  }
  return (
    <LoggedinContext.Provider value={value}>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <NavBar />
          </div>
        </div>

        {/* <h2>Current LoggedIn: {loggedin}</h2> */}
        <Switch>
          <Route exact path="/">
            <Home apiurl={url} />
          </Route>
          <Route exact path="/post-detail/:id">
            <PostDetail apiurl={url} />
          </Route>
          <Route exact path="/add-post">
            <AddPost />
          </Route>
          <Route exact path="/author/:author">
            <PostByAuthor apiurl={url} />
          </Route>
          <Route exact path="/login">
            <Login apiurl={url} />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          {loggedin ? (
            <>
              <Route exact path="/admin/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/admin/add-new-post">
                <AddNewPost apiurl={url} />
              </Route>
              <Route exact path="/admin/all-posts">
                <AllPosts apiurl={url} />
              </Route>
              <Route exact path="/admin/edit-post/:id">
                <EditPostPage apiurl={url} />
              </Route>
              <Route exact path="/admin/delete-post/:id">
                <DeletePost apiurl={url} />
              </Route>
            </>
          ) : (
            ""
          )}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </LoggedinContext.Provider>
  );
}

export default App;
