import React,{useState} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

const AddPost = function(){
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState({
        postTitle:'',
        postContent:''
    });
    const [submitted, setSubmitted] = useState(false);

    
    const onChangeHandler = (e) =>{
        // console.log(e.target.value)
        // e.target.name = e.target.value;
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }
      const onSubmitHandler = (e) =>{
        e.preventDefault();
       
        const requestOptions = {
            title: value.postTitle,
            content: value.postContent
        }
        axios.post("http://localhost:3000/posts",requestOptions)
        .then(res => {
            setSubmitted(true);
            const pdata = res.data;
            return setPosts(pdata);
          })
        
      }
      if (submitted) {
        return <Redirect push to={{
          pathname: '/'
        }}
        />
      } 
    return <>
        <h2 className="mb-5">Add Blog Post Here</h2>
        <form onSubmit = {onSubmitHandler}>
            <div className="form-group mb-4">
                <labe>Blog title</labe>
                <input type="text" name="postTitle" className="form-control" required onChange = {onChangeHandler}/>
            </div>
            <div className="form-group mb-4">
                <labe>Blog content</labe>
                <textarea name="postContent" className="form-control" required onChange = {onChangeHandler}></textarea>
            </div>
            <p className="text-end"><button className="btn btn-info">Submit Post</button></p>
        </form>
    </>
}

export default AddPost