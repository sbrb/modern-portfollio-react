import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import "./HomeSection.css";

// Social Links
import Icon from "./Icon";

// Image
import Selfie from "../../img/selfie.png";
import Smiley from "../../img/smiley_1.svg";
import LadyBgPath from "../../img/lady_bgpath.svg";
import Star1 from "../../img/star.svg";
import Star2 from "../../img/star_2.svg";
import Star3 from "../../img/star_3.svg";
import medal from "../../img/medal.svg";

function HomeSection() {
  return (
    <section className="home section bd_grid" id="home">
      <div className="home_data">
        <h1 className="home_title">
          <p> Hi, I'am</p>
          <br />
          <span>
            <AutoTyping
              active
              textRef="SHAYAN BISWAS"
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
          </span>
          <br />
          Software Developer.
        </h1>

        <a href="#contact" className="button">
          Contact
        </a>
      </div>

      <div className="icon">
        {Icon &&
          Icon.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>

      <div className="home_img">
        <img src={Selfie} alt="profileImg" className="profileImg" />
        <img src={LadyBgPath} alt="profileBg" className="profileBg" />

        <img src={Smiley} alt="smiley" className="smiley" />
        <img src={Star1} alt="Star1" className="Star1" />
        <img src={Star2} alt="Star2" className="Star2" />
        <img src={Star3} alt="Star3" className="Star3" />

        <div className="box box1">
          <div className="imageBox">
            <img src={Smiley} alt="Smiley" />
          </div>
          <div className="ContentBox">
            <h2>Fullstack</h2>
            <p>OSM developer clint's reviews.</p>
          </div>
        </div>

        <div className="box box2">
          <div className="imageBox">
            <img src={medal} alt="medal" />
          </div>
          <div className="ContentBox">
            <h2>Awards</h2>
            <p>Awarded by clint's for my OSM work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
