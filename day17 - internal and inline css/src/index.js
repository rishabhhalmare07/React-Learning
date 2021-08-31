import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"; //How we use CSS 

const name = "CSS STyling in React using JSX";
const img1 = "https://picsum.photos/260/320"
const img2 = "https://picsum.photos/270/320"
const img3 = "https://picsum.photos/280/320"
const link = "https://www.google.com/"   //THis is a link we will use this as a href link from where we will directly jump to this website in link

// THis is how we write Internal(inline) CSS
// We make a variable (object) and store all the values there 
// then we write variable(heading) in ReactDOM.render as a JavaScript
const heading = {
  color: 'brown',   //  key: 'value' - this is the way we have to write    here key = color and value = brown 
  textTransform: 'capitalize',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px brown',
  margin: '50px 0px',
};

ReactDOM.render(
  <> 
  <h1 style = {heading}> {name} </h1> {/* here we are using CSS via JAvaScript Variable */}
  
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
