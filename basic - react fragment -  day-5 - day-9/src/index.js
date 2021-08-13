    //day - 5
var React = require('react'); //When we need to use html tags i.e <h1> ,<p> etc, for that we need react 
    //import React from 'react';
var ReactDOM = require('react-dom'); // THis reactDOm we use when we want to manipulate the DOM
    //import React from 'react-dom';
    //ReactDom.render('what to show', 'where to show','call back function ()');
ReactDOM.render(<h1> Hello World</h1>, document.getElementById("root"));   //here root is id in public/index.html

    //Day-7
    //Writing below code we will get two div one our main div and another this one
    //SO to write all in one div we use a concept called as React.Fragment
ReactDOM.render(
    <div>
        <h1>Here we are getting one extra div</h1>
        <p> See here one more "div is getting created"</p>
        <h2>See in code</h2>
    </div>,
    document.getElementById("root")
);

    //Day -7 = Here in below code using React.Fragment we get all our content in same div
ReactDOM.render(
    <React.Fragment>  {/* <> </>= other way of writing React.Fragment*/}
        <h1>React Fragment</h1>
        <p> Here using React.fragment we can write all the content inside same div it wont create one more div</p>
        <h2>See in code</h2>
    </React.Fragment>,
    document.getElementById("root")
);
