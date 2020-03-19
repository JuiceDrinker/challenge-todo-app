import React from "react";

export default function InputForm(props) {
  const handleChange = e => {
    props.handleChange(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder='"Shopping "'
        className="text-input"
      />
    </div>
  );
}
