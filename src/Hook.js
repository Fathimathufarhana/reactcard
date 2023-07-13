import React,{useState} from "react";
 

function Hook() {
    const [state,setState]=useState(0);

    return(
        <div style={{textAlign:"center"}}>

            <h1>{state}</h1>
            <button 
            onClick={
                function name(params) {
                    console.log('increment');
                    setState(state+1)
                   
                }
            }
            >+</button>
            <button 
            onClick={
                function name(params) {
                    console.log("decrement");
                    setState(state-1)
                }
            }
            >-</button>
        </div>
    )
}

export default Hook