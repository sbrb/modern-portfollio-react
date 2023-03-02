import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import "./ServicesSection.css";
import ServiceBox from "./ServiceBox";

import Smiley1 from "../../img/smiley_1.svg";
import Smiley2 from "../../img/smiley_2.svg";
import Smiley3 from "../../img/smiley_3.svg";

function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="circle service_circleOne"></div>
      <div className="circle service_circleThree"></div>

      <h2 className="section_title">
        <AutoTyping
          active
          textRef="Services"
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

      <div className="service_container bd_grid">
        <div className="serviceImage">
          <div className="serviceImage_child">
            <ServiceBox
              imageName={Smiley1}
              box_name={"Frontend"}
              technology={"Html, CSS, Tailwind, SASS, JavaScript React.js, Redux, Thunk, Figma."}
            />
          </div>

          <div className="serviceImage_child">
            <ServiceBox
              imageName={Smiley2}
              box_name={"Backend"}
              technology={"Node.js, Express.js, MongoDB, MySQL, AWS-3, Redis."}
            />
          </div>

          <div className="serviceImage_child">
            <ServiceBox
              imageName={Smiley3}
              box_name={"Fullstack"}
              technology={"MERN Stack, Next.js, TypeScript."}
            />
          </div>

          <div className="serviceImage_child">
            <ServiceBox
              imageName={Smiley3}
              box_name={"Mobile App"}
              technology={"React Native."}
            />
          </div>
        </div>

        <div className="service_text_section">
          <h2 className="service_subtitle">
            My awesome <br /> <span>Services</span>
          </h2>
          <p>
            I am freelencer. <mark>I work $20/h.</mark> My services like- Single Page Web App Development using react, node, express, mongo, mysql. And also mobile development using react native.
          </p>
          <br />
          <br />
          <a href="#contact" className="button">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
