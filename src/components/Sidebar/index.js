import React from "react";
import './Sidebar.scss';

function Sidebar() {
  return (
    <aside className="sidebar main-sidebar">
      <ul className="home-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/followers">Followers</a>
        </li>
        <li>
          <a href="/explore">Explore</a>
        </li>
        <li>
          <a href="/articles">Articles</a>
        </li>
        <li>
          <a href="/question-and-answer">Question & Answer</a>
        </li>
        <li>
          <a href="/lesson-requests">Lesson Requests</a>
        </li>
      </ul>

      <div className="sidebar-hr"></div>

      <ul>
        <li>
          <a href="/html">HTML</a>
        </li>
        <li>
          <a href="/css">CSS</a>
        </li>
        <li>
          <a href="/javascript">JavaScript</a>
        </li>
        <li>
          <a href="/php">PHP</a>
        </li>
        <li>
          <a href="/mysql">MySql</a>
        </li>
        <li>
          <a href="/laravel">Laravel</a>
        </li>
        <li>
          <a href="/python">Python</a>
        </li>
        <li>
          <a href="/git">Git</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
