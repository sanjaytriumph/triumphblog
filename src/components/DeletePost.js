import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

const DeletePost = function(props){
    const [posts, setPosts] = useState([]);
    const {id} = useParams();
   
    const postId = id.replace(':','');
    //console.log(postId);
    const [submitted, setSubmitted] = useState(false);

    // const apiURL = 'http://localhost:3000/posts/'+postId;
    const apiURL = `${props.apiurl}posts/${postId}`;
    const fetchData = function(){
        axios.delete(apiURL)
        .then(res => {
            setSubmitted(true);
          const pdata = res.data;
          return setPosts(pdata);
        })
    }

      useEffect(() => {
        fetchData();        
      },[]);

      if (submitted) {
        return <Redirect push to={{
          pathname: '/'
        }}
        />
      }
    return <>
            <div className="text-center">
                <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            
    </>
}

export default DeletePost