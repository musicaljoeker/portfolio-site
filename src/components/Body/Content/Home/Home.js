import React, { Component } from "react";
import "./Home.css";
import profileImage from "../../../../images/joseph-profile.jpg";

class Home extends Component {
  componentDidMount() {
    document.title = "Joseph Kerkhof - Home";
  }
  render() {
    return (
      <div className="home-wrapper">
        <h1 className="greeting">
          Hi{" "}
          <span role="img" aria-label="light skinned waving hand emoji">
            👋🏻
          </span>
          ,
        </h1>
        <img
          src={profileImage}
          alt="Joseph wearing a hunting coat and blue baseball hat is smiling at camera in the woods"
          className="profile-image"
        />
        <p>
          Nice to meet you! I'm a full stack web developer with a motivation to
          develop great products. With an eye for detail, I've proven the
          ability to write quality code that works at scale. I have a passion
          for innovating creative solutions to difficult tasks. I spend my free
          time learning new technologies to apply to my profession, and
          traveling with my lovely wife.
        </p>
        <p>
          Currently, I’m a Web Application Developer from the University of
          Wisconsin – Oshkosh. I earned my Undergraduate degree from{" "}
          <abbr title="University of Wisconsin – Oshkosh">UW-Oshkosh</abbr> in
          Computer Science in 2016. Now I'm pursuing a Master’s degree in Data
          Science from{" "}
          <abbr title="University of Wisconsin - Extension">UW-Extension</abbr>.
        </p>
        <p>
          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            href="mailto:joseph.kerkhof@gmail.com"
          >
            Reach out
          </a>{" "}
          to me to see how I can help you and your organization!
        </p>
      </div>
    );
  }
}

export default Home;
