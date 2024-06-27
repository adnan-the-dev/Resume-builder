import React from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
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
          <div className="main-div">
            <div className="phoneMail-container">
              <div className="phone">
                <SportsEsportsIcon style={{ color: '#d9b357' }}/>
                <p>Video Games</p>
              </div>
              <div className="phone">
                <AudiotrackIcon style={{ color: '#d9b357' }}/>
                <p>Music</p>
              </div>
            </div>
            <div className="phoneMail-container">
              <div className="phone">
                <WindPowerIcon style={{ color: '#d9b357' }}/>
                <p>Renewable Energy</p>
              </div>
              <div className="phone">
                <AutoAwesomeIcon style={{ color: '#d9b357' }}/>
                <p>Artifical Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
