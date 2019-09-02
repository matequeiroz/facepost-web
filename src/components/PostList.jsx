import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Julio Alcantara",
            avatar:
              "https://facepost-img.s3-sa-east-1.amazonaws.com/6b41f71b0f835bd8c87070ad1bc9c9e360747fa1.png"
          },
          date: "04 Jun 2019",
          content: "Amigos, vocês viram a situação da amazônia?",
          comments: [
            {
              id: 1,
              author: {
                name: "Isabella Santana",
                avatar:
                  "https://facepost-img.s3-sa-east-1.amazonaws.com/e9eb7b7e1b0fa6f95727d84b853dddb4daa91b5e.png"
              },
              content: "Acabei de ver na TV 😔"
            },
            {
              id: 2,
              author: {
                name: "Mateus Queiroz",
                avatar:
                  "https://facepost-img.s3.sa-east-1.amazonaws.com/profile.jpg"
              },
              content: "Nossa, uma pena!"
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Ricardo Silva",
            avatar:
              "https://facepost-img.s3-sa-east-1.amazonaws.com/d5807a68287b188b7a3617ea15126446ad6af950.png"
          },
          date: "04 Jun 2019",
          content:
            "Pessoal, conseguir a vaga de desenvolvedor no Google!! 🙌🏻🙌🏻🙌🏻",
          comments: [
            {
              id: 1,
              author: {
                name: "Mateus Queiroz",
                avatar:
                  "https://facepost-img.s3.sa-east-1.amazonaws.com/profile.jpg"
              },
              content: "Parabéns, hehe!!"
            }
          ]
        },
        {
          id: 3,
          author: {
            name: "Pedro Martins",
            avatar:
              "https://facepost-img.s3-sa-east-1.amazonaws.com/c519d2910f58d0ecdcfe7498ef39551f06ee1995.png"
          },
          date: "04 Jun 2019",
          content: "Alguém me indica uma plataforma de seguros?",
          comments: [
            {
              id: 1,
              author: {
                name: "Mateus Queiroz",
                avatar:
                  "https://facepost-img.s3.sa-east-1.amazonaws.com/profile.jpg"
              },
              content: "Acessa: zeropay.io"
            },
            {
              id: 2,
              author: {
                name: "Isabella Santana",
                avatar:
                  "https://facepost-img.s3-sa-east-1.amazonaws.com/e9eb7b7e1b0fa6f95727d84b853dddb4daa91b5e.png"
              },
              content: "Lá é muito top, tem cashback!"
            }
          ]
        }
      ]
    };
  }

  render() {
    return this.state.posts.map(post => <PostItem key={post.id} post={post} />);
  }
}

export default PostList;
