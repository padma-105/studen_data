import { Component } from "react";
import { cards } from "../data/card";


class First extends Component{
    render(){
       console.log(cards)
      
        return(
            <>
            <h1>class based components</h1>
              {cards.length > 0 ? ( <div >
               
                {cards.map((card,index)=>(
                    <>
                    <p id={index}><strong>Name : </strong>{card?.name ? card?.name:"n/a"}</p>
                    <p id={index}><strong>Age : </strong>{card?.age?card?.age:"n/a"}</p>
                    <p id={index}><strong>Email: </strong>{card?.email?card?.email:"n/a"}</p>
                    <p id={index}><strong>Hobbies : </strong>{card?.hobbies?card?.hobbies:"n/a"}</p>
                    </>
                ))
            }
               </div>):"no data"}
               
            </>
        )
    }
}

export default First