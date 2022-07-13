import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

const EditPost = function (props) {
  const [submitted, setSubmitted] = useState(false);
  const [posts, setPosts] = useState({});
  const [value, setValue] = useState();
  const { id } = useParams();

  /*const {id,title,content} = useParams();*/
  /*const inputTitle = title.replace(':','');
    const inputContent = content.replace(':','');*/

  /*const [value, setValue] = useState({
        postTitle:inputTitle,
        postContent:inputContent
    });*/

  const postId = id.replace(":", "");
  console.log(postId);
  console.log(props);

  const fetchData = () => {
    // axios.get("http://localhost:3000/posts/"+postId)
    axios.get(`${props.apiurl}posts/${postId}`).then((res) => {
      const pdata = res.data;
      return setPosts(pdata);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onChangeHandler = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const postData = () => {
    // axios.patch("http://localhost:3000/posts/"+postId,{
    axios
      .patch(`${props.apiurl}posts/${postId}`, {
        title: value.postTitle,
        content: value.postContent,
        thumbnail: value.postThumbnail,
      })
      .then((res) => {
        setSubmitted(true);
        const pdata = res.data;
        console.log(pdata);
        return setPosts(pdata);
      });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("submitted");
    postData();
  };
  if (submitted) {
    return (
      <Redirect
        push
        to={{
          pathname: "/",
        }}
      />
    );
  }
  return (
    <>
      <h2 className="mb-5">Edit Blog Post Here</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group mb-4">
          <labe>Blog title</labe>
          <input
            type="text"
            name="postTitle"
            className="form-control"
            required
            defaultValue={posts.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group mb-4">
          <labe>Blog content</labe>
          <textarea
            name="postContent"
            className="form-control"
            required
            defaultValue={posts.content}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <labe>Blog thumbnail URL</labe>
          <input
            type="text"
            name="postThumbnail"
            className="form-control"
            required
            defaultValue={posts.thumbnail}
            onChange={onChangeHandler}
          />
        </div>
        <p className="text-end">
          <button className="btn btn-info">Submit Post</button>
        </p>
      </form>
    </>
  );
};

export default EditPost;
