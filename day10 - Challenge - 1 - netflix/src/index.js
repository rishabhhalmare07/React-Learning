var React = require('react'); 
var ReactDOM = require('react-dom'); 

ReactDOM.render(
  <> {/* <> </>= other way of writing React.Fragment*/}
      <h1>The Netflix Movie Collection</h1>
       <p> List of Movies</p>
       <ol>
         <li>House Of Card</li>
         <li>Money Heist</li>
         <li>Dark</li>
         <li>Witcher 3</li>
         <li>LIttle THings</li>
       </ol>
  </>,
  document.getElementById("root")
);