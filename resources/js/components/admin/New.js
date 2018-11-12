import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            body: ""
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onFieldChange(e) {
        this.setState({ [event.target.name]: e.target.value });
        console.log(e.target.value);
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        const post = {
            title: this.state.title,
            image: this.state.image,
            body: this.state.body
        };
        axios.post("api/blogs/store", post).then(res => {
            console.log(res);
            history.push("/");
        });
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="ui main text container segment">
                <div className="ui huge header">Create New Post</div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.onFieldChange}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="image"
                        value={this.state.image}
                        onChange={this.onFieldChange}
                    />
                    <input
                        type="text"
                        name="body"
                        placeholder="blog post goes here"
                        value={this.state.body}
                        onChange={this.onFieldChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
