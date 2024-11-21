import React from "react";

const ButtonWithImage = ({ imageSrc, text, onClick }) => {
  return (
    <button className="button-with-image" onClick={onClick}>
      <img src={imageSrc} className="button-image" />
      <p className="button-text">{text}</p>
    </button>
  );
};

export default ButtonWithImage;