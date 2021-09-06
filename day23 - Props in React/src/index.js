import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';

ReactDOM.render(
  <>  
      {/* This is the way How we use Props in React   */}
     <Card 
         imgsrc = "https://wallpapercave.com/wp/wp4056399.jpg" 
         title = "A Netflix Original Series"
         sname = "Dark"
         link = "https://www.netflix.com/in/title/80100172"
     />
     <Card 
         imgsrc = "https://wallpapercave.com/wp/wp7418494.jpg" 
         title = "A Netflix Original Series"
         sname = "Extra Curricular"
         link = "https://www.netflix.com/in/title/80990668"
     />
     <Card 
         imgsrc = "https://wallpapercave.com/wp/wp4056399.jpg" 
         title = "A Netflix Original Series"
         sname = "Stranger Things"
         link = "https://www.netflix.com/in/title/80057281"
     />
         
        {/* This is normal way of writing in react    */}
        {/* <div className = "cards">
            <div className = "card">
              <img src = "https://wallpapercave.com/wp/wp4056399.jpg" 
              alt = "pic" 
              className = "card_img"/>
            </div>
        </div> */}
      
  </>,
  document.getElementById('root')
);
