import React from 'react';
import ReactDOM from 'react-dom';

//Day - 12 - How to use Template Literals in JavaScript
//  `{}` = THis is the way of writing a Template Literals
//{ `{}` }  = In JSX we need to mention a outer {} curly braces also

const filename = "Format of Template Literals";
const name = "this how we write a Template Literals";

ReactDOM.render(
  <>
      <h1> {`Writing a Template Literal in JSX ${filename} and also the way ${name} and just writing just an expression ${8 + 8}`}</h1>
      <p> {`The template Literals can be used as ${6 *8} like this as well`}</p>
  </>,
  document.getElementById('root')
);

