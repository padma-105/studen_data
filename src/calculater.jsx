import { Component } from "react";

class Calculater extends Component{

constructor(){
    super()
    this.state={
        input:"",
        count:0
    }
}

clearInput = ()=>(
    this.setState({input:"",count:0})
)
handleClick = (value)=>(
    this.setState({input:this.state.input+value})
)

calculateResult = ()=>(
    this.setState({input:eval(this.state.input)})
)
    render(){
   return <>
    <h1>calculater app</h1>
   <input type="text" name="text" id="text" value={this.state.input} />
   <div >Result = {this.state.count}</div>
   <div>
    {
        (["+","-","*","/","%","=",1,2,3,4,5,6,7,8,9,0,].map(value=>(
            
          
            <button key ={value} onClick={()=>value === "="? this.calculateResult():this.handleClick(value)}>
                {value}
            </button>
           
        )))
        
    }
   </div>
  <button onClick={this.clearInput}>Clear</button>

    </>
    
    }
    
    }

    export default Calculater