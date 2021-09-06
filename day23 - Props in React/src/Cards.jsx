import React from 'react';

//we pass props as an argument in function
//then we write console.log to print it
//also props we use that as an object like props.imgsrc where props is argument which we are using it as an object and imgsrc is an attribute which we want to write


function Card (props){
    console.log(props);
     return(
   <div className = "cards">
           <div className = "card">
              <img src = {props.imgsrc}   alt = "pic" 
              className = "card_img"/>
              <div className = "card_info">
                 <span className = "card_category"> {props.title}</span>
                 <h3 className = "card_title"> {props.sname}</h3>
                 <a href = {props.link} target = "_blank">
                   <button> Watch now</button>
                 </a>
              </div>
           </div>
        </div>
     )
 } 

 export default Card;