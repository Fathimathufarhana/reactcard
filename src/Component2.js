import React from "react";
import "./Component2.css"

function Component2(props) {
    return(
        <div className="main">
            <div className="d3">
        <img src={props.image} className="img2"></img>
        </div>
        <div className="d4">
        <h1 className="h1" style={{fontSize:45}}>{props.name}</h1>
        <p className="desc">{props.desc}</p>
       
        <button className="b1">{props.button}</button>
        </div>
        </div>
    )
}
export default Component2