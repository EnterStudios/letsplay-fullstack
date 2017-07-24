import React, { Component } from 'react';

//User Profile Info
class User extends Component {
  render() {
    return (
      <div className="user-container">
        <img className="avatar" src={this.props.avatar} alt="avatar"/>
        <h2>{this.props.user}</h2>
        <h4>About Me</h4>
        <p>{this.props.aboutme}</p>
      </div>
    );
  }
}

export default User;