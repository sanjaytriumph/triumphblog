import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const PostDetail = function(props){
    const [posts, setPosts] = useState([]);
    
    const {id} = useParams();   
    const postId = id.replace(':','');
    //console.log(postId);
    
    const apiURL = 'http://localhost:3000/posts?id='+postId;
    //console.log(apiURL);
    const fetchData = function(){
        axios.get(apiURL)
        .then(res => {
          const pdata = res.data;
          return setPosts(pdata);
        })
    }

      useEffect(() => {
        fetchData();        
      },[]);

    return <>       
        {
            posts.map((item) =>{
                return (<article className="card mb-4" key={item.id}>
                <div className="card-header">
                <h2 className="h4">{item.title}</h2>
                </div>                    
                <div className="card-body article-content">
                    {item.content}
                </div>
            </article>)
            })
        }
       
    </>
}

export default PostDetail;