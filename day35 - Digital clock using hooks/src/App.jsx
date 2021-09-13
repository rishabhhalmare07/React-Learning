import React, { useState }  from "react";

const App = () => {
    
    let time = new Date().toLocaleTimeString();

    const [curtime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

//By using setInterval we are getting the time changed automatically
//Bcz setInterval after a particular given time is updating the time 
// 1000 = 1000 milisec = 1 sec so after 1 sec it will update
// UpdateTime is the variable of "useState" which saves update value 

    setInterval(UpdateTime, 1000);

    return(
    <>
    <h1>{curtime}</h1>
    </>
    ); 
};

export default App;