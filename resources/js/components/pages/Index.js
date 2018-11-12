import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Show from "./Show";
import AllBlogs from "./AllBlogs";

export default class Index extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={AllBlogs} />
                <Route
                    path="/blog/:id"
                    render={props => (
                        <Show {...props} />
                    )}
                />
            </Switch>
        );
    }
}
