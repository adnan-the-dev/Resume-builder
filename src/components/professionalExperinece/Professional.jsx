import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import "./professional.css";

export default function Professional() {
  return (
    <>
      <div className="professional-container">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <h4>Digital Marketing Manager</h4>
        <span>Achievements</span>

        <div className="achievment-list">
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>
          </ul>
        </div>

        {/* Marketion Assistant */}

        <div className="achievment-list">
          <h2>Marketing Assistant</h2>

          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              iure id in repellendus animi nam voluptates inventore tempora
              necessitatibus nostrum, sequi rem laboriosam incidunt aperiam,
              blanditiis praesentium minus sed commodi.
            </li>
          </ul>
        </div>

        {/* Marketion Assistant */}
        
        <div className="intersts-container">
          <h2>INTERSTS</h2>
          <div>
            <div>
              <MailIcon />
              <p>abc123@gmail.com</p>
            </div>
            <div>
              <PhoneIphoneIcon />
              <p>032238475754</p>
            </div>
          </div>
          <div>
            <div>
              <MailIcon />
              <p>abc123@gmail.com</p>
            </div>
            <div>
              <PhoneIphoneIcon />
              <p>032238475754</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
