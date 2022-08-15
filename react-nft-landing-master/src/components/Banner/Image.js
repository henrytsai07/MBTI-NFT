import React from "react";

const Image = ({ src, fallback, type = "image/webp", alt }) => {
  return (
      <img src={fallback} alt={alt} />
  );
};

export default Image;
