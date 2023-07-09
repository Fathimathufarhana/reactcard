import React from "react";
import "./Component1.css"

function Component1(props) {
    return(
        <div className="main">
            <div className="d1">
        <img src={props.image} className="img1"></img>
        </div>
        <div className="d2">
        <h1 className="h1" style={{fontSize:45}}>{props.name}</h1>
        <p className="desc">{props.desc}</p>
       
        <button className="b1">{props.button}</button>
        </div>
        </div>
    )
}
export default Component1