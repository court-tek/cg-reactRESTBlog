import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class EditPage extends Component {
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
              <h1 className="header">Update Post Here</h1>
              <form className="ui form">
                <input type="text" placeholder="" />
              </form>
            </div>
        );
    }
}
