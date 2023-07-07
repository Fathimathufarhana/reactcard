import "./Header.css"
import React from "react"
import Hleft from "./Hleft"
import Hright from "./Hright"




function Header(){
    return(
       <div id="main">
       <Hleft/>
       <Hright/>
    </div> 
    )
}



export default Header