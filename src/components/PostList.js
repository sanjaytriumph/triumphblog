import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = function (props) {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    // const res = await fetch("http://localhost:3000/posts");
    // const data = await res.json();

    // return setPosts(data);
    axios.get(`${props.apiurl}posts`).then((res) => {
      const pdata = res.data;
      return setPosts(pdata);
    });
  }
  useEffect(() => {
    fetchData();
    console.log("after posts" + posts);
  }, []);

  return (
    <>
      <div className="container">
        <div class="row">
          {posts
            .slice(0)
            .reverse()
            .map((item) => {
              let content = item.content;
              console.log(content.length);
              if (content.length > 100) {
                content = content.substr(0, 100) + "...";
              }
              return (
                <div className="col-md-4" key={item.id}>
                  <article className="card mb-4">
                    <div className="card-header p-0">
                      {/* <Link to={`edit-post/:${item.id}/:${item.title}/:${item.content}`}>edit</Link> */}
                      <img className="img-fluid" src={item.thumbnail} alt="" />
                    </div>
                    <div className="card-body article-content">
                      <h2 className="h4 post-title">
                        <Link to={`post-detail/:${item.id}`}>{item.title}</Link>
                      </h2>
                      {content}
                      {content.length > 100 ? (
                        <p className="text-end mt-3">
                          <Link
                            className="btn btn-primary btn-sm"
                            to={`post-detail/:${item.id}`}
                          >
                            Read More
                          </Link>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="card-footer">
                      Author:
                      <Link to={`author/:${item.author}`}>{item.author}</Link>
                    </div>
                  </article>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PostList;
