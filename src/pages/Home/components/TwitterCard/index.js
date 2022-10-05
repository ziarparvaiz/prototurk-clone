import React from "react";
import "./TwitterCard.scss";
import { BsTwitter } from "react-icons/bs";
import Button from "../../../../components/Button";

function TwitterCard() {
  return (
    <div className="twitter-card">
      <div className="twitter-card--logo">
        <BsTwitter />
      </div>
      <div className="twitter-card--content">
        <div className="card-title">
          Don't forget to follow @prototurkcom on Twitter!
        </div>
        <div className="card-description">
          Don't forget to follow our twitter account to be instantly informed
          about the latest videos we have prepared!
        </div>
        <Button
          url="https://twitter.com/prototurkcom"
          title="Follow Me"
          type="light"
        />
      </div>
    </div>
  );
}

export default TwitterCard;
