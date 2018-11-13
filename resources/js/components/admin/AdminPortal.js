import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink, Switch } from "react-router-dom";
import AllPost from "./AllPost";
import Display from "./Display";
import EditPage from "./EditPage";

let linkStyle = {
  display: 'block'
}
export default class AdminPortal extends Component {
    render() {
        const { match, location, history } = this.props;
        return (
            <Sandwich>
                <div>
                    <NavLink style={linkStyle} to="/admin">Admin Home</NavLink>
                    <NavLink style={linkStyle} to="/admin/1">Display Page</NavLink>
                    <Route exact path="/admin" component={AllPost} />
                    <Route exact path="/admin/:id" component={Display} />
                    <Route exact path="/admin/:id/edit" component={EditPage} />
                </div>
            </Sandwich>
        );
    }
}
