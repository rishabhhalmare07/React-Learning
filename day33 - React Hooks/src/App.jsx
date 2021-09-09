import React, { useState } from "react";

const App = () => {
    //useState is a hook concept
    //useState is a function which returns an array with 2 items
    const state = useState();
   
    //count is current value and setCount is updated value
    const [count, setCount] = useState(0);

    const IncNum =  () => {
        setCount(count + 1); //here 
        console.log(state);
        //console.log("Clicked " + count++);
    };
    const DecNum =  () => {
        setCount(count - 1); //here 
        console.log(state);
        //console.log("Clicked " + count++);
    };
    return(
        <>

            <h1>{count}</h1>
            <button onClick = {IncNum}> Increase</button>
            <button1 onClick = {DecNum}> Decrease</button1>
        </>
    );
};

export default App;