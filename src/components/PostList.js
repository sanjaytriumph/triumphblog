import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PostList = function(){
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
                let content = item.content;
                console.log(content.length);
                if(content.length > 100){
                    content = content.substr(0,100) + '...';
                }
                return (<article className="card mb-4" key={item.id}>
                <div className="card-header">
                <h2 className="h4"><Link to={`post-detail/:${item.id}`}>{item.title}</Link></h2>
                {/* <Link to={`edit-post/:${item.id}/:${item.title}/:${item.content}`}>edit</Link> */}
                
                </div>                    
                <div className="card-body article-content">                    
                    {content}
                    {
                      (content.length > 100)? 
                      <p className="text-end mt-3"><Link className="btn btn-primary btn-sm" to={`post-detail/:${item.id}`}>Read More</Link></p>
                      :''
                    }
                    
                </div>
            </article>)
            })
        }
       
    </>
}

export default PostList