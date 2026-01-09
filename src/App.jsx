import React, { useState } from "react";
import Count from "./Component/Count";
import Namechange from "./Component/Namechange";
import Product from "./Component/product";
import ApiCall from "./Component/ApiCall";
import ApiCalltwo from "./Component/ApiCallTwo";
import Logout from "./Component/Logout";
import "./App.css";
import Formone from "./Component/Formone";
import Formtwo from "./Component/Formtwo";

function App() {
  const [hide, sethide] = useState(true);

  const handlelogout = () => {
    sethide(false);
  };

  return (
    <div>
      <h1>Name : G.K. GOPALA KRISHNAN</h1>

      <h2>9AM BATCH</h2>

      <ApiCalltwo/>

    </div>
  );
}

export default App;
