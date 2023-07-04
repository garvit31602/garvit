import React from 'react';
import ReactDOM from 'react-dom/client';

function Navbar(){
    return(
        <div id="nav">
        <img src={require("./logo512.png")} id="react-logo"/>
        <span id="text1">ReactFacts</span>
        <span id="text2">React course-Project 1</span>
        </div>
    )
}

export default Navbar;
