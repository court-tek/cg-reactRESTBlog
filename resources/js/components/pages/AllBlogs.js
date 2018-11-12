import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class AllBlogs extends Component {
    constructor() {
        super();
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

    mappeData() {

        return this.state.blogs.map(blog => {
            let newDate = new Date(blog.created_at);
            let blogDate = newDate.toDateString();
            return (
                <div className="item" key={blog.id}>
                    <div className="image">
                        <img style={{}} src={`${blog.image}`} />
                    </div>
                    <div className="content">
                        <a className="header" href="">
                            {blog.title}
                        </a>
                        <div className="meta">
                            <span>{blogDate}</span>
                        </div>
                        <div className="description">
                            <p>
                                {blog.body.substring(0, 100)}
                                ...
                            </p>
                        </div>
                        <div className="extra">
                            <NavLink
                                to={`/blog/${blog.id}`}
                                className="ui floated basic violet button"
                            >
                                Read More
                                <i className="right chevron icon" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="ui main text container">
                <div className="ui huge header">RESTful Blog app</div>
                <div className="ui top attached segment">
                    <div className="ui divided items">{this.mappeData()}</div>
                </div>
            </div>
        );
    }
}
