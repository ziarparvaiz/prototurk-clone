import React from "react";
import "./ProgrammingLanguagesCard.scss";
import { AiFillFile } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";

function ProgrammingLanguagesCard({ LanguagesName, Icon, Lessons, Videos}) {
  return (
    <a href="/" className="ProgrammingLanguagesCard">
      <div className={`icon ${LanguagesName}`}>
        {Icon}
      </div>
      <span className={`text btn-${LanguagesName}`}>{LanguagesName}</span>
      <div className="status">
        <span className="article">
          <AiFillFile /> {Lessons} Lessons
        </span>
        <span className="video">
          <FaVideo /> {Videos} Video
        </span>
      </div>
    </a>
  );
}

export default ProgrammingLanguagesCard;
