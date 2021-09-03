import React from 'react';

//To make a component write "function nameOfFunction" - example - function list(){return()} 
function list(){
    return (
         <ol>
             <li>Bring 2 Apples</li>
             <li>Bring 1 dozen Banana</li>
             <li>1 Pizza</li>
             <li>2 Burgers</li>
         </ol>
    );
}

//THis export is mandatory bcz it exports(means sends data) to where we import
export default list;