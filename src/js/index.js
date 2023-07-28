//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";
import react from "react";
//*función setIntervall(()=>{},1000) 1000 milisegundos=1segundo 


//render your react application
let contador = 0 
setInterval(()=>{
    ReactDOM.render(<SecondsCounter seconds={contador}/>, document.querySelector("#app"));
    contador++
},1000); 

