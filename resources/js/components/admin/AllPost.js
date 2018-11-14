import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        console.log("hello");
        axios.get("api/blogs/").then(res => {
            console.log(res);
            this.setState({ blogs: res.data });
        });
    }

    mappingIt() {
        return this.state.blogs.map(blog => {
          return (
            <div key={blog.id} className="ui top attached">
              <div className="ui centered items">
                <NavLink to={`/admin/${blog.id}`}>{blog.title}</NavLink>
              </div>
            </div>
          );
        });
    }

    render() {
        return (
            <div className="ui main text container segment">
              {this.mappingIt()}
            </div>
        );
    }
}
