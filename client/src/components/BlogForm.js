import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import { AuthConsumer } from "../providers/AuthProvider";

class BlogForm extends React.Component {
  // const { user } = useContext(AuthContext);
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  state = {
    title: "",
    body: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    axios
      .post("/api/blogs", { title, body })
      .then((res) => {
        this.props.add(res.data);
        this.setState({ title: "", body: "" });
        // props.toggleForm(); // this breaks
      })
      .catch((err) => {
        debugger;
        console.log(err.response);
        alert("post blog broke");
      });
  };
  render() {
    const { title, body } = this.state;
    return (
      <>
        <h1>Hello {this.props.auth.user.email}</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              placeholder="Title"
              name="title"
              required
              onChange={this.handleChange}
              // onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Form.Input
              label="Body"
              placeholder="Body"
              name="body"
              required
              onChange={this.handleChange}
              // onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  }
}

// need to wrap Blog in HOC, my Authconsume to pass it props
class ConnectedBlogForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <BlogForm auth={auth} {...this.props} />}
      </AuthConsumer>
    );
  }
}

// export default BlogForm;
export default ConnectedBlogForm;

// const BlogForm = (props) => {
//   const { user } = useContext(AuthContext);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("/api/blogs", { title, body })
//       .then((res) => {
//         props.add(res.data);
//         // props.toggleForm(); // this breaks
//       })
//       .catch((err) => {
//         console.log(err.response);
//         alert("post blog broke");
//       });
//   };

//   return (
//     <>
//       <h1>Hello {user.email}</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group widths="equal">
//           <Form.Input
//             label="Title"
//             placeholder="Title"
//             name="title"
//             required
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//           <Form.Input
//             label="Body"
//             placeholder="Body"
//             name="body"
//             required
//             onChange={(e) => setBody(e.target.value)}
//             value={body}
//           />
//         </Form.Group>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     </>
//   );
// };
