import React from "react";
// import Header from "./header/Header";
// import Section from "./section/Section"
// import Footer from "./Footer/Footer";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";



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
      />


      <Component2
      image="https://media.discordapp.net/attachments/1103207862521561162/1126755241749135380/reusable-banners-card-2-bg-1.png?width=1440&height=387"
      name="Our New Designs"
      desc="Get the designs developed by our in-house team all for yourself"
      button="Show more"
      />

<Component3
      image="https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?width=1440&height=387"
      name="Insiders"
      desc="Get the the top class products for yourself with an extra off"
      button="Show more"
      />

     {/* <Component2
      name="Our New Designs"
      desc="Get the designs developed by our in-house team all for yourself"
      button="Show more"
      /> */}


       </div>

    )
}



export default App