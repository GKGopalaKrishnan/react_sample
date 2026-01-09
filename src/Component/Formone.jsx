import React, { useState } from "react";

export default function Formone() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handlename = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleage = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };
  return (
    <div>
      <form>
        <label>Name:</label>
        <input onChange={handlename} placeholder="Enter the Name"></input>
        <br></br>
        <br></br>
        <label>Age:</label>
        <input onChange={handleage} placeholder="Enter the Age"></input>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <br></br>
        <h2>Output</h2>
        Name:{name}
        <br></br>
        Age:{age}
        <br></br>
      </form>
    </div>
  );
}
