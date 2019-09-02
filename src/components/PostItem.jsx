import React, { Component } from "react";
import PostComment from "./PostComment";
import "../styles/post.css";

class PostItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="post">
        <div className="header-post">
          <img src={this.props.post.author.avatar} alt="avatar-author" />
          <div className="data-author">
            <span className="name-author-post">
              {this.props.post.author.name}
            </span>
            <span className="date-post">{this.props.post.date}</span>
          </div>
        </div>
        <div className="content-post">
          <p>{this.props.post.content}</p>
        </div>
        <div className="divider" />
        <div className="comments-post">
          {this.props.post.comments.map(comment => (
            <PostComment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostItem;
