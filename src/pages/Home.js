import React from 'react';
import PostList from '../components/PostList';


const Home = function(props){
    
    return <>
        <PostList apiurl={props.apiurl}/>
    </>
}

export default Home