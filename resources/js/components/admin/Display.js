import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class EditDestroy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            body: ""
        };
      }
    render() {
        const { match, location, history } = this.props;
        return (
            <div className="ui main text container segment">
              <h1 className="header">Id: {match.params.id} This Component Will Display will alow you to either delete or edit a post</h1>
              <NavLink to="/admin/:id/edit" className="ui green basic button">Edit Post</NavLink>
              <button className="ui red basic button">Delete Post</button>
            </div>
        );
    }
}
