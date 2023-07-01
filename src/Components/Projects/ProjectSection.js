import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import "./ProjectSection.css";

import ProjectImages from "./ProjectImage.js";
import ImageContainer from "./ImageContainer";

function ProjectSection() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title">
        <AutoTyping
          active
          textRef="Projects"
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

      <div className="projects_container bd_grid">
        {ProjectImages &&
          ProjectImages.map((d) => (
            <ImageContainer
              key={d.id}
              imageName={d.imageName}
              projectName={d.projectName}
              technology={d.technology}
              live={d.technology}
              github={d.technology}
              demo={d.technology}
            />
          ))}
      </div>
    </section>
  );
}

export default ProjectSection;
