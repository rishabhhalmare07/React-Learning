import React, { useState } from "react";

const App = () => {
    let newTime = new Date().toLocaleDateString();
    const [curtime, setCurtime] = useState(newTime);

    //Here in below code we are giving the current Date function to update
    // As we know  useState returns 2 item = 1. current  2. update
    // here we are setting for 2. update what the update function should do
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCurtime(newTime);
    };
    return(
        <>
            <h1>{curtime}</h1>
            <button onClick = {UpdateTime}> Get Time</button>
        </>
    );
};
    
export default App;