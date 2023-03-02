import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import "./WorkSection.css";

import BrandImage from "../../img/clients_group.svg";

function WorkSection() {
  return (
    <section className="work section" id="work">

      <h2 className="section_title">
        <AutoTyping
          active
          textRef="Work"
          I
          writeSpeed={170}
          deleteSpeed={150}
          delayToWrite={1400}
          delayToDelete={100000}
        />
        <BlinkCursor
          active
          blinkSpeed={10000}
        />
      </h2>

      <div className="work_container bd_grid">
        <div className="work_image">
          <img src={BrandImage} alt="BrandImage" />
        </div>

        <div className="work_text_section">
          <h2 className="work_subtitle">
            I Work For My <br />
            <span>Clients</span>
          </h2>
          <p>
            I work as freelencer.
            <br />
            My take work thorough linkedin, youtube and another social media.
            <br />
            I do freelancing on upwork, fiverr, freelencer.
            <br />
            I have 1yr intern trane experience on functionUp.
            <br />
            And also i have more than 1yr self experience.
          </p>
          <br />
          <a href="#contact" className="button">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
