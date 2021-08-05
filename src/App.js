import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './pages/Dashboard';
import AddNewPost from './pages/admin/AddNewPost';
import AllPosts from './pages/admin/AllPosts';
import EditPostPage from './pages/admin/EditPostPage';
import PageNotFound from './pages/PageNotFound';
import LoggedinContext from "./loggedin-context";

function App() {
  const [loggedin, setLoggedin] = useState(sessionStorage.getItem('loggedIn'));
  const value = { loggedin, setLoggedin };
  console.log(loggedin);
  return (
    <LoggedinContext.Provider value={value}>
      <BrowserRouter>
      <div className="container">
      {/* <h2>Current LoggedIn: {loggedin}</h2> */}
        <NavBar/>
        <Switch>
          <Route exact path = '/'><Home/></Route>
          <Route exact path = '/post-detail/:id'><PostDetail/></Route>
          <Route exact path = '/add-post'><AddPost/></Route>
          
          
          <Route exact path = '/login'><Login/></Route>
          <Route exact path = '/logout'><Logout/></Route>
          {
            (loggedin)?
            <>
            <Route exact path = '/admin/dashboard'><Dashboard/></Route>
            <Route exact path = '/admin/add-new-post'><AddNewPost/></Route>
            <Route exact path = '/admin/all-posts'><AllPosts/></Route>
            <Route exact path = '/admin/edit-post/:id'><EditPostPage/></Route>
            <Route exact path = '/admin/delete-post/:id'><DeletePost/></Route>
            </>
          :''
          }
          <Route component={PageNotFound} />
          
        </Switch>
        
      </div>
    </BrowserRouter>
    </LoggedinContext.Provider>
    
  );
}

export default App;
