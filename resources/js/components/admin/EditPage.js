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
        this.onFieldChange = this.onFieldChange.bind(this);
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

    onFieldChange(e) {
        this.setState({ [event.target.name]: e.target.value });
        console.log(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let postId = this.props.match.params.id;
        const { history } = this.props;
        const blogPost = {
          title: this.state.title,
          image: this.state.image,
          body: this.state.body
        }
        console.log(blogPost);
        axios.put(`/api/blogs/${postId}/update`, blogPost).then(res => {
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
                            onChange={this.onFieldChange}
                        />
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input
                            type="text"
                            name="image"
                            value={this.state.image}
                            onChange={this.onFieldChange}
                        />
                    </div>
                    <div className="field">
                        <label>Body</label>
                        <textarea
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={this.onFieldChange}
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
