import React from "react";
import "./ProjectSection.css";

function ImageContainer({ imageName, projectName, technology, live, github, demo }) {

  const projectNameStyle = {
    color: 'red',
    textAlign: "center",
  };

  const imageNameStyle = {
  };

  const technologyStyle = {
  };
  const btnDiv = {
    margin: "auto",
    border: "1px solid red",
    borderRadius: "0rem 0rem .5rem .5rem",
  }
  const button2 = {
    fontSize: "1rem",
    width: "4.6rem",
    margin: "1rem",
    paddingLeft:"-2rem"
  };

  return (
    <div className="projects_img">
      <h2 style={projectNameStyle}>{projectName}</h2>
      <img style={imageNameStyle} src={imageName} alt="imageName" />
      <span className="fff" style={technologyStyle}>{technology}</span>
      <div className="btnDiv" style={btnDiv}>
        <button className="button" style={button2}><a href={live}>Live</a></button>
        <button className="button" style={button2}><a href={github}>Git</a></button>
        <button className="button" style={button2}><a href={demo}>See</a></button>
      </div>
    </div>
  );
}

export default ImageContainer;
