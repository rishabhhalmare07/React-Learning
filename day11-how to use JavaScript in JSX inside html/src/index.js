import React from 'react';
import ReactDOM from 'react-dom';

//How to use JAvaScript Expression(Expression means 3 +3 or a variable we make) in  JSX
// {} - inside this curly braces we can write JavaScript Code

const filename = "Way Of Writing JavaScript inj JSX";
ReactDOM.render(
    <>
       <h1> {filename} - Only JavaScript Expression's can be used not Statement </h1>
       <p><h2>Expression </h2> means {3 + 3} or create a variable {filename} or Built - in JavaScript modules - {Math.random()}</p>
       <p> <h2>Statement </h2> means for-loop, if-else , etc can't be written</p>
    </>,
  document.getElementById('root')
);
