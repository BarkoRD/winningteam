import React from "react";

const InputTypeRadio = ({ label, name, value, onChange }) => {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default InputTypeRadio;
