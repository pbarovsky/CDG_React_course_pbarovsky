import React from "react";
import "./TextAreaField.css";

const TextAreaField = ({
  id,
  label,
  placeholder,
  value,
  setValue,
  disabled = false,
}) => {
  return (
    <div className="textarea-fieldwrapper">
      <label htmlFor={id} className="textarea-fieldlabel">
        {label}
      </label>
      <textarea
        id={id}
        className="textarea-field__textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default TextAreaField;
