//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSection from "../CommentSection/CommentSectionContainer";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log(props.data);
  return (
    <div className="posts-container-wrapper">
      {props.data.map((post, index) => {
        return <Post key={index} post={post} />
      })}
      <CommentSection comments={props.data.comments}/>
    </div>
  );
};

export default PostsPage;

