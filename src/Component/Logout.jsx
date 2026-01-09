import React, { useEffect, useState } from "react";
import "../App.css";

export default function Logout() {
  const [apidata, setapidata] = useState([]);

  const handleapi = async () => {
    try {
      const api = await fetch("https://fakestoreapi.com/products");
      const data = await api.json();
      setapidata(data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    console.log("Component Mounted");
    handleapi();

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    if (apidata.length > 0) {
      console.log("Component Updated - API Data Changed", apidata);
    }
  }, [apidata]);

  return (
    <div>
      <h1>UseEffect</h1>
    </div>
  );
}
