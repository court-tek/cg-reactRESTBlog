import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            body: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
    }

    componentDidMount() {
        const blogId = this.props.match.params.id;
        console.log(blogId);
        axios.get(`/api/blogs/${blogId}/edit`).then(res => {
            console.log(res);
            console.log(res.data);
            const blogPost = res.data;
            this.setState({
                title: blogPost.title,
                image: blogPost.image,
                body: blogPost.body
            });
        });
    }

    onTitleChange(e) {
      this.setState({ title: e.target.value })
      console.log(e.target.value);
    }

    onImageChange(e) {
      this.setState({ image: e.target.value })
      console.log(e.target.value);
    }

    onBodyChange(e) {
      this.setState({ body: e.target.value })
      console.log(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let postId = this.props.match.params.id;
        const { history } = this.props;
        const Post = {
          title: this.state.title,
          image: this.state.image,
          body: this.state.body
        }
        console.log(Post);
        axios.put(`/api/blogs/${postId}/update`, Post).then(res => {
          console.log(res);
          history.push("/admin");
        });
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="ui main text container segment">
                <div className="ui huge header">Edit: {this.state.title}</div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input
                            type="text"
                            name="image"
                            value={this.state.image}
                            onChange={this.onImageChange}
                        />
                    </div>
                    <div className="field">
                        <label>Body</label>
                        <textarea
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={this.onBodyChange}
                        />
                    </div>
                    <input
                        className="ui violet big basic button"
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}
