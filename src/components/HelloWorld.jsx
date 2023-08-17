import React from "react"
class HelloWorld extends React.Component{
    constructor(){
        super()
        console.log("hello world constructor")
        this.state={
            msg:"data1"
        }
    }
    change(){
        this.setState({
            msg:"data changed!"
        })
    }
    render(){
        console.log("hello world render")
        return(
        <div>
            <h2>helloworld msg:{this.state.msg}</h2>
            <p>gg gg gg wp</p>
            <button onClick={()=>this.change()}>change</button>
        </div>)
    }
    componentDidMount(){
        console.log("hello world did mount")
    }
    componentDidUpdate(){
        console.log("hello world did updated")
    }
    componentWillUnmount(){
        console.log("hello world did unmount")
    }
    shouldComponentUpdate(){
        return false
    }
    getSnapshotBeforeUpdate(){
        return{
            
        }
    }
}
export default HelloWorld