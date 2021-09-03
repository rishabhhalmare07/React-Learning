import React from 'react';
import Heading from './Heading'; // Importing Heading component
import Para from './Para';   // Importing Para component
import List from './List';   // Importing List component

function App(){
    return(
    <>
      <h1>Learning React Component - Functional COmponent</h1>
      <p>This is a Normal heading <b>but below</b> this u can see a new heading using component </p>
      
      {/*Component of  Heading*/}
      <Heading></Heading>
      
      <p><b>Below we created a paragraph tag component </b></p>
      
      {/*Component of  Paragraph*/}
      <Para></Para>
      
      <h1>List using Component</h1>
     
      {/*Component of List*/}
      <List></List>
    </>
    );
}

export default App;