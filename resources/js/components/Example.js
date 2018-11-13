import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Sandwich, Route, Link } from "react-router-dom";
import AdminPortal from "./admin/AdminPortal";
import New from "./admin/New";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Index from "./pages/Index";
import About from "./pages/About";

const contentBlock = {
  margin: '100px 0'
}

export default class Layout extends Component {
    constructor() {
      super()
      this.state = {

      };
    }
    render() {
        return (
            <Sandwich>
                <div id="index">
                    <section className="content-area">
                        <Header />
                        <article style={contentBlock} className="content">
                            <Route  path="/" component={Index} />
                            <Route  path="/new" render={(props) =>(<New {...props} />  )}/>
                            <Route  path="/about" component={About} />
                            <Route  path="/admin" component={AdminPortal} />
                        </article>
                    </section>
                    <Footer />
                </div>
            </Sandwich>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Layout />, document.getElementById("app"));
}
