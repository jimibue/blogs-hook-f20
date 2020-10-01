import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Header, Segment } from "semantic-ui-react";
import BlogForm from "./BlogForm";
import useAxios from "../customHooks/useAxiosBasic";

let blogs_X = [
  { id: 1, title: "Blog1", body: "this is the body", user_id: "1" },
  { id: 2, title: "Blog2", body: "this is the body 2", user_id: "1" },
];
const Blogs = (props) => {
  // const [blogs, setBlogs] = useState([]);
  // API NOT UP YET
  // useEffect(() => {
  //   axios
  //     .get("/api/blogs")
  //     .then((res) => {
  //       // expecting res.data to be an array of blogs
  //       setBlogs(res.data);
  //     })
  //     .catch((err) => {
  //       alert("get todos not working");
  //     });
  // }, []);

  //with custom hook
  const { data: blogs, loading, error } = useAxios("/api/blogs");
  // const obj = useAxios("/api/blogs");

  const renderBlogs = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>error occured {error.status}</p>;
    }
    return blogs.map((blog) => (
      <Segment key={blog.id}>
        <List.Header as="h3">{blog.title}</List.Header>
        <List.Description>{blog.body}</List.Description>
      </Segment>
    ));
  };

  // expecting blog to be {title, name}
  const addBlog = (blog) => {
    console.log(blog);
  };
  return (
    <>
      <Header as="h1">My Blogs</Header>
      <List>{renderBlogs()}</List>
      <BlogForm add={addBlog} />
      <BlogForm add={addBlog} x="hello" />
      <br />
    </>
  );
};

export default Blogs;
