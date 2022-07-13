import React, { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";

const AddPost = function (props) {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState({
    postTitle: "",
    postContent: "",
    postThumbnail: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChangeHandler = (e) => {
    // console.log(e.target.value)
    // e.target.name = e.target.value;
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const requestOptions = {
      title: value.postTitle,
      content: value.postContent,
      thumbnail: value.postThumbnail,
      author: sessionStorage.getItem("username"),
    };
    console.log(requestOptions);
    axios.post(`${props.apiurl}posts`, requestOptions).then((res) => {
      setSubmitted(true);
      const pdata = res.data;
      return setPosts(pdata);
    });
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
      <h2 className="mb-5">Add Blog Post Here</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group mb-4">
          <label>Blog title</label>
          <input
            type="text"
            name="postTitle"
            className="form-control"
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group mb-4">
          <label>Blog content</label>
          <textarea
            name="postContent"
            className="form-control"
            required
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label>
            Blog thumbnail URL ("Eg: https://picsum.photos/id/1/900/500")
          </label>
          <input
            type="url"
            name="postThumbnail"
            className="form-control"
            required
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

export default AddPost;
