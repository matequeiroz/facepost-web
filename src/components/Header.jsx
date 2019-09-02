import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo-app">
            <h2>Facepost</h2>
          </div>
          <div className="my-profile">
            <div className="menu-profile">
              <a href="#">Meu perfil</a>
            </div>
            <div className="avatar">
              <img
                src="https://facepost-img.s3.sa-east-1.amazonaws.com/profile.jpg"
                alt="avatar-png"
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
