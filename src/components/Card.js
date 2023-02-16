import React from "react";

const Card = ({ title, image }) => {
  console.log(image, "img====");
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="blog-image">
        <img src={image} alt="Blog-Image" />
      </div>
    </div>
  );
};

export default Card;
