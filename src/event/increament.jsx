import { Component } from "react";

class Todolist extends Component{
constructor(){
    super()
    this.state={
        count:0
    }
}
increamentClick =()=>(
    this.setState({count:this.state.count+1})
)
decreamentClick =()=>(
    this.setState({count:this.state.count-1})
)
resetClick =()=>(
    this.setState({count:0})
)
render(){
     return(
     <>
      <h1>hi this is padhu</h1>
      <p>Numbers : {this.state.count}</p>
       <button type="submit" onClick={this.increamentClick} >add</button>
       <button type="submit" onClick={this.decreamentClick} >delete</button>
       <button type="submit" onClick={this.resetClick} >reset</button>
     </>
     )
}


}
export default Todolist