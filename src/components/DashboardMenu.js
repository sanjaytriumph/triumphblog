import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardMenu = () =>{
    return <>
        <ul className="list-group">
            <li className="list-group-item" aria-current="true">Dashboard
                <ul>
                    <li> <NavLink to='/admin/dashboard'>Home</NavLink></li>
                </ul>
            </li>
            <li className="list-group-item">Posts
                <ul>
                    <li> <NavLink to='/admin/all-posts'>All Posts</NavLink></li>
                    <li> <NavLink to='/admin/add-new-post'>Add New Post</NavLink></li>
                   
                </ul>        
            </li>           
        </ul>
    </>
}

export default DashboardMenu