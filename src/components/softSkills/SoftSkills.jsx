import React from "react";
import "./softSkills.css";
import { Button } from "@mui/material";
export default function SoftSkills() {
  return (
    <>
      <div>
        <h3 className="tag-soft">SOFT SKILLS</h3>

        <div className="btn-skills">
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
          <div>
            <Button style={{ backgroundColor: "#d9b357", color: "white" }}>
              Contained
            </Button>
          </div>
        </div>

        <h3 className="tag-soft">MARKETING SKILLS</h3>

        <div className="marketing-container">
          <div>
            <h3>SEO</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
          </div>
          <div>
            <h3>SEO</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
          </div>
          <div>
            <h3>SEO</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
          </div>
          <div>
            <h3>SEO</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
          </div>
        </div>

        <div className="education-container">
          <div className="education">
            <h3 className="tag-soft">EDUCATION</h3>
            <h2>Ms International Marketing and Management</h2>
            <h4>The University of Jack</h4>
            <span>06/03/2024</span>
          </div>
        </div>

        <div className="certificate-container">
          <h3 className="tag-soft">CERTIFICATES</h3>
          <div className="certificate">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div>
          <h3 className="tag-soft">LANGUAGES</h3>
          <div className="language-container">
            <div className="language-item">
              <h3>English</h3>
              <h5>Native</h5>
            </div>
            <div className="language-item">
              <h3>English</h3>
              <h5>Native</h5>
            </div>
            <div className="language-item">
              <h3>English</h3>
              <h5>Native</h5>
            </div>
            <div className="language-item">
              <h3>English</h3>
              <h5>Native</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
