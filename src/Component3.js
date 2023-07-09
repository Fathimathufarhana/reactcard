import React from "react";
import "./Component3.css"

function Component3(props) {
    return(
        <div className="main">
            <div className="d5">
        <img src={props.image} className="img3"></img>
        </div>
        <div className="d6">
        <h1 className="h1" style={{fontSize:45}}>{props.name}</h1>
        <p className="desc">{props.desc}</p>
       
        <button className="b1">{props.button}</button>
        </div>
        </div>
    )
}
export default Component3