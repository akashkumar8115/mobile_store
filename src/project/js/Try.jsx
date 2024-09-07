import React, { useState } from "react";

function NumberInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setValue(input);
    }
  };

  return (
    <div>
      <label>Enter a number: </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter number"
      />
      <p>Your input: {value}</p>
    </div>
  );
}

export default NumberInput;
