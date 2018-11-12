import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class New extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        console.log("hello");
        axios.get("api/blogs/store").then(res => {
            console.log(res);
            this.setState({ blogs: res.data });
        });
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="ui main text container segment">
              <div className="ui huge header">Create New Post</div>
              <form>
                <input type="text" name="" placeholder="title" />
                <input type="text" name="" placeholder="image" />
                <input type="text" name="" placeholder="blog post goes here" />
                <input type="submit" />
              </form>
            </div>
        );
    }
}
