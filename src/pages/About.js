import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Timmy Dang</div>
            <div className="brief_description">
              Hello! My name is Timmy Dang and I'm a rising junior studying computer science at MIT. Currently, I'm a data science intern at OM1. In my free time, I enjoy going on runs and fencing. Fun fact, I'm actually on the Varsity Fencing Team at MIT!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
