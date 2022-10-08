import React from "react";
import "./TelegramCard.scss";
import Button from "../../../../components/Button";
import { FaTelegramPlane } from "react-icons/fa";

function TelegramCard() {
  return (
    <div className="telegram-card">
      <div className="telegram-card--logo">
        <FaTelegramPlane />
      </div>
      <div className="telegram-card--content">
        <div className="card-title">Join our Telegram group!</div>
        <div className="card-descriptioN">
          Don't forget to join our telegram group where you can talk to hundreds
          of people instantly.
        </div>
        <Button
          url="https://t.me/prototurk"
          title="Follow Me"
          type="light"
        />
      </div>
    </div>
  );
}

export default TelegramCard;
