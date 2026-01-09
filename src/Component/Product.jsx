import React, { useState } from "react";

export default function Product() {
  const [data, setdata] = useState([
    "Neymar",
    "Ronaldo",
    "Beckham",
    "Xavi",
    "Iniesta",
    "Mbappe",
  ]);

  const [name, setname] = useState("Neymar");

  const [details, setdetails] = useState([
    {
      name: "messi",
      no: 10,
    },
    {
      name: "ronaldo",
      no: 7,
    },
    {
      name: "pedri",
      no: 8,
    },
  ]);

  return (
    <div>
      <h1>Players</h1>

      {data.map((da, i) => (
        <div>
          <h1>
            {(i = i + 1)}
            {da}
          </h1>
        </div>
      ))}

      {details.map((d) => (
        <div>
          <h1>Name:{d.name}</h1>
          <h2>No:{d.no}</h2>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
