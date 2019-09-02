import React, { Component } from "react";
import "../styles/post.css";

class PostComment extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="comment">
        <img src={this.props.comment.author.avatar} />
        <p>
          <span className="author-comment">
            {this.props.comment.author.name}:
          </span>
          {this.props.comment.content}
        </p>
      </div>
    );
  }
}

export default PostComment;
