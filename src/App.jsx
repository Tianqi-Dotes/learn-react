import React from "react"
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
    constructor() {
        
        super(
        )
        this.state = {
            msg: "hello app now",
            isShow:true
        }

    }
    change(){
        this.setState({isShow:!this.state.isShow})
    }
    render() {
        return <div>
            {this.state.msg}
            <button onClick={()=>this.change()}>click to change hide</button>
            {this.state.isShow?<HelloWorld/>:null}
            
            </div>
    }
}
export default App
