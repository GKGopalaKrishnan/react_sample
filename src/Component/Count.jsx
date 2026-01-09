import React, { useState } from "react";

function Count() {

    const[Count,setcount] = useState(1)

    function changename(){

        setcount(Count + 1)

    }

    return(
    
    <div>

        <h1>Count - {Count}</h1>

        <button onClick={changename}>change</button>
    </div>

    )
    }

export default Count
