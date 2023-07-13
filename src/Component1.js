import React from "react";
import "./Component1.css"

function Component1(props) {
    return (
        <div>
            <div className={`${props.cssstyle} ${props.parent}`} >
                <div className="d1">
                    <img src={props.image}
                     className="img1"></img>
                </div>
                <div className={`d2 ${props.second} ${props.third} ${props.txt}`}>
                    <h1 className="head1" style={{ fontSize: 45 }}>{props.name}</h1>
                    <p className="desc1">{props.desc}</p>

                    <button className="btn1">{props.button}</button>
                </div>
            </div>



        </div>
    )
}
export default Component1