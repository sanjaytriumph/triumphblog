import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AdminPostList = function(){
    const [posts, setPosts] = useState([]);
    
    function fetchData() {
        // const res = await fetch("http://localhost:3000/posts");
        // const data = await res.json();

        // return setPosts(data);
        axios.get('http://localhost:3000/posts')
        .then(res => {
          const pdata = res.data;
          return setPosts(pdata);
        })
      }
      useEffect(() => {
        fetchData();
        console.log('after posts' + posts);
      },[]);

    return <>
            
        {
            posts.slice(0).reverse().map((item) =>{
                
                return (<article className="card mb-4" key={item.id}>
                <div className="card-header">
                <h2 className="h4"><Link to={`edit-post/:${item.id}`}>{item.title}</Link></h2>
                {/* <Link to={`edit-post/:${item.id}/:${item.title}/:${item.content}`}>edit</Link> */}
                <Link to={`edit-post/:${item.id}`}> Edit</Link>
                <Link to={`delete-post/:${item.id}`}> Delete</Link>
                </div>                    
               
            </article>)
            })
        }
       
    </>
}

export default AdminPostList