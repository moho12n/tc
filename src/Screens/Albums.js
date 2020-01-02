import React from "react"

import logo from "../assets/img/mylogo.png"
import Card from "../Components/Card"

class Albums extends React.Component{
    render(){
        return(
           <main>
               <section>
                   <div className="container">
                       <div className="row">
                           <Card title="first album" poster="salah" path={logo}/>
                           <Card title="second album" poster="younes" path={logo}/>
                       </div>
                   </div>
               </section>
           </main>
        )
    }
}

export default Albums