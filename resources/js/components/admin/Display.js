import React, { Component } from "react";
import { BrowserRouter as Sandwich, Route, NavLink } from "react-router-dom";

export default class EditDestroy extends Component {
    constructor(props) {
        super(props);
        this.state = {
          singlePost: []
        };
      }

      componentDidMount() {
          const blogId = this.props.match.params.id;
          console.log(blogId);
          axios.get(`/api/blogs/${blogId}/show`).then(res => {
              console.log(res);
              console.log(res.data);
              const singlePost = res.data;
              this.setState({ singlePost });
          });
      }
    render() {
        const { match, location, history } = this.props;
        const { singlePost } = this.state;
        let newDate = new Date(singlePost.created_at);
        let blogDate = newDate.toDateString();
        return (
            <div className="ui main text container segment">
            <div className="ui huge header">{singlePost.title}</div>
            <section className="ui top attached">
              <div className="item">
              <img
                  className="ui centered rounded image"
                  src={`${singlePost.image}`}
              />
              <div className="content">
                <span>{blogDate}</span>
              </div>
              <div className="description">
                <p>{singlePost.body}</p>
              </div>
              </div>
            </section>
              <NavLink to="/admin/:id/edit" className="ui green basic button">Edit Post</NavLink>
              <button className="ui red basic button">Delete Post</button>
            </div>
        );
    }
}
