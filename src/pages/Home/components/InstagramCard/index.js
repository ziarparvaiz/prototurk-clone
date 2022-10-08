import React from 'react'
import './InstagramCard.scss';
import Button from '../../../../components/Button';
import { FaInstagram } from "react-icons/fa";

function InstagramCard() {
    return (
        <div className="instagram-card">
          <div className="instagram-card--logo">
            <FaInstagram />
          </div>
          <div className="instagram-card--content">
            <div className="card-title">
              Don't forget to follow @prototurk.official on Instagram!
            </div>
            <div className="card-descriptioN">
              Don't forget to follow the instagram account where we share tips and
              easy uses about coding.
            </div>
            <Button
              url="https://www.instagram.com/prototurk.official/"
              title="Follow Me"
              type="light"
            />
          </div>
        </div>
      );
}

export default InstagramCard