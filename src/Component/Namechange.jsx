import React, { useState } from "react";

export default function Namechange() {
  const [name, setname] = useState("Lionel");

  const handlechange = () => {
    if (name === "Lionel") {
      setname("Messi");
    } else {
      setname("Lionel");
    }
  };
  return (
    <div>
      <h1> Name : {name} </h1>
      <button onClick={handlechange}>change</button>
    </div>
  );
}
