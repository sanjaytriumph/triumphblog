import React from "react";
import PostList from "../components/PostList";

const Home = function (props) {
  return (
    <>
      <div className="banner">
        <div className="container">
          <p>Hello Welcome to</p>
          <h1>Triumph Blog</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
        </div>
      </div>
      <PostList apiurl={props.apiurl} />
    </>
  );
};

export default Home;
