import React from "react";

function ServiceBox({ imageName, box_name, technology }) {
  return (
    <div className="service_box">
      <img src={imageName} alt="service_box_img" />
      <h2>{box_name}</h2>
      <p>{technology} </p>
    </div>
  );
}

export default ServiceBox;
