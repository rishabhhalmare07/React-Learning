import React from 'react';
import ReactDOM from 'react-dom';

//Day - 13 = Challenge - 
// TO display Currrent Date and Time

const name = " Current Date and Time";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
      <h1>Showing {name}</h1>
      <p> Current Date is: - <h2> {currDate} </h2></p>
      <p> Current TIme is: - <h2> {currTime} </h2></p>
  </>,
  document.getElementById('root')
);
