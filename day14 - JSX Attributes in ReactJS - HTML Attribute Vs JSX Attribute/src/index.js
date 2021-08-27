import React from 'react';
import ReactDOM from 'react-dom';

// Day - 14  - JSX Attributes (is similar to HTML Attribute)

const name = "JSX Attributes";
const img1 = "https://picsum.photos/250/320"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/250/350"
const link = "https://www.google.com/"   //THis is a link we will use this as a href link from where we will directly jump to this website in link


ReactDOM.render(
  <> {/*contentEditable is a JSX HTML attribute*/}
  <h1 contentEditable = "true"> Learning - {name} </h1>
  <img src = "https://picsum.photos/200/300"  alt= "error"/>
  <img src = {img1}  alt= "error1"/>
  <img src = {img2}  alt= "error1"/>    {/*Here we are using JavaScript Expression in JSX Format*/}
  <a href = {link} target = "Error NO LINK">
      <img src = {img3}  alt= "error1"/>
   </a>
  </>,
  document.getElementById('root')
);
