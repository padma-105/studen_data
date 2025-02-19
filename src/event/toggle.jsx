import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state = {
          data:true
        }
    }
    toggleHandle=()=>(
        this.setState({data : !this.state.data})
    )
    render(){
        return(
            <>

        <h1>Toggle button</h1>
        {this.state.data && <p>"hello"</p>}
        <button type="submit" onClick={this.toggleHandle}>{this.state.data ? "hide":"show"}</button>

            </>
        )
    }
}

export default Toggle