import React, { Component } from "react";
import "./Notification.css";
import io from "socket.io-client";
import logo from "./logo.svg";
import api from "../service/api";

class Feed extends Component {
  async componentDidMount() {
    this.registerToSocket();
  }
  registerToSocket = () => {
    console.log("Connected");
    const socket = io("http://localhost:4000");
    socket.on("notification", notification => {
      console.log(notification);
      alert("Houve uma Notificação");
    });
  };

  async health() {
    const { data } = await api.get("/");
    alert(data.msg);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notification
          </a>
          <a onClick={this.health}>Health</a>
        </header>
      </div>
    );
  }
}

export default Feed;
