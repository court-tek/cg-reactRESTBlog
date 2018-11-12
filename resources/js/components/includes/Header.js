import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllBlogs from "../pages/AllBlogs";
import Show from "../pages/Show";
import New from "../admin/New";
import About from "../pages/About";
import AdminPortal from "../admin/AdminPortal";

export default class Header extends Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <div className="header item">
                        <i className="code icon" />
                        PHP Isn't Dead
                    </div>
                    <div className="header item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="header item">
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        );
    }
}
