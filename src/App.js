import React from "react";
// import Header from "./header/Header";
// import Section from "./section/Section"
// import Footer from "./Footer/Footer";
import Component1 from "./Component1";
// import Component2 from "./Component2";
// import Component3 from "./Component3";
// import Component4 from "./Component4";



function App(){
    return(
       <div>

        {/* <Header/>
        <Section/>
        <Footer/> */}

      <Component1
      
      image="https://media.discordapp.net/attachments/1103207862521561162/1126755241371635732/reusable-banners-card-1-bg-1.png?width=1440&height=387"
      name="The Seasons Latest"
      desc="Get the seasons all latest designs in a flick of your hand"
      button="Show more"
      cssstyle="first"
      txt="color1"
      />


      <Component1
      image="https://media.discordapp.net/attachments/1103207862521561162/1126755241749135380/reusable-banners-card-2-bg-1.png?width=1440&height=387"
      name="Our New Designs"
      desc="Get the designs developed by our in-house team all for yourself"
      button="Show more"
      second="second"
      parent="parent"
      txt="color2"


      />

<Component1
      image="https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?width=1440&height=387"
      name="Insiders"
      desc="Get the the top class products for yourself with an extra off"
      button="Show more"
      third="third"
      parent="parent"
      txt="color3"

      // forth="forth"

      />

{/* <Component1
      image4="https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?width=1440&height=387"
      name4="Insiders"
      desc4="Get the the top class products for yourself with an extra off"
      button4="Show more"
      /> */}

     

       </div>

    )
}



export default App