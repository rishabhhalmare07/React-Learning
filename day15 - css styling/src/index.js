import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"; //How we use CSS 

const name = "LCSS STyling in React using JSX";
const img1 = "https://picsum.photos/260/320"
const img2 = "https://picsum.photos/270/320"
const img3 = "https://picsum.photos/280/320"
const link = "https://www.google.com/"   //THis is a link we will use this as a href link from where we will directly jump to this website in link

ReactDOM.render(
  <> 
  <h1 className = "heading"> {name} </h1>
  
  <div className = "img_div">
      <img src = {img1}  alt= "error1"/>
      <img src = {img2}  alt= "error1"/>    
      <a href = {link} target = "Error NO LINK">
          <img src = {img3}  alt= "error1"/>
      </a>
   </div>
  </>,
  document.getElementById('root')
);
