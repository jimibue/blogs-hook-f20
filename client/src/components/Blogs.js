import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Header, Segment } from "semantic-ui-react";

let blogs_X = [
  { id: 1, title: "Blog1", body: "this is the body", user_id: "1" },
  { id: 2, title: "Blog2", body: "this is the body 2", user_id: "1" },
];
const Blogs = (props) => {
  const [blogs, setBlogs] = useState([]);

  // API NOT UP YET
  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((res) => {
        // expecting res.data to be an array of blogs
        setBlogs(res.data);
      })
      .catch((err) => {
        //TODO add error handling when api setup
        setBlogs(blogs_X);
        // alert('get todos not working')
      });
  });

  const renderBlogs = () => {
    return blogs.map((blog) => (
      <Segment key={blog.id}>
        <List.Header as="h3">{blog.title}</List.Header>
        <List.Description>{blog.body}</List.Description>
      </Segment>
    ));
  };

  return (
    <>
      <Header as="h1">My Blogs</Header>
      <br />
      <List>{renderBlogs()}</List>
    </>
  );
};

export default Blogs;
