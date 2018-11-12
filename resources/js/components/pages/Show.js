import React, { Component } from "react";
import axios from "axios";

export default class Show extends Component {
    constructor() {
        super();
        this.state = {
            blogPost: []
        };
    }

    componentDidMount() {
        const blogId = this.props.match.params.id;
        console.log(blogId);
        axios.get(`/api/blogs/${blogId}/show`).then(res => {
            console.log(res);
            console.log(res.data);
            const blogPost = res.data;
            this.setState({ blogPost });
        });
    }

    render() {
        const { blogPost } = this.state;
        let newDate = new Date(blogPost.created_at);
        let blogDate = newDate.toDateString();
        return (
            <div className="ui main text container segment">
                <div className="ui huge header">{blogPost.title}</div>
                <section className="ui top attached">
                  <div className="item">
                  <img
                      className="ui centered rounded image"
                      src={`${blogPost.image}`}
                  />
                  <div className="content">
                    <span>{blogDate}</span>
                  </div>
                  <div className="description">
                    <p>{blogPost.body}</p>
                  </div>
                  </div>
                </section>
            </div>
        );
    }
}
