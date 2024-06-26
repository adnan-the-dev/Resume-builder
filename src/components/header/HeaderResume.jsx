import React from "react";
import "./header.css";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import imageUrl from "../../assets/image.png";
import Professional from "../professionalExperinece/Professional";
import SoftSkills from "../softSkills/SoftSkills";
export default function HeaderResume() {
  return (
    <>
      <div className="main-container">
        <div className="text-container">
          <div className="header-text">
            <h1>Robert Johnson</h1>
            <h3>Digital Marketing Specialist</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ea laudantium vero labore tempore officiis harum culpa
              ut. Quam quo tenetur enim tempora fugiat itaque tempore reiciendis
              quisquam debitis aut?
            </p>
          </div>
          <div className="header-image">
            <img style={{ width: "100%" }} src={imageUrl} alt="" />
          </div>
        </div>
        {/* email section of header */}
        <div className="email-container">
          <div>
            <MailIcon />
            <p>abc123@gmail.com</p>
          </div>
          <div>
            <PhoneIphoneIcon />
            <p>032238475754</p>
          </div>
          <div>
            <LocationOnIcon />
            <p>pakistan</p>
          </div>
          <div>
            <LinkedInIcon />
            <p>Linkedin.com/rebort.dev</p>
          </div>
        </div>

        {/* professional section of header */}
        <div className="professional-section">
          <div style={{border:'1px solid red',width:'50%'}}>
            <Professional />
          </div>
          <div style={{border:'1px solid yellow',width:'50%'}}>
            <SoftSkills />
          </div>
        </div>
      </div>
    </>
  );
}
