import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            titles: ["流行", "新款", "精选"],
            click:0,
            current:0
        }
    }
    changeText(index){
        this.setState(
            {
                current:index
            }
        )
    }
    change(index){
        console.log("curent:"+index)
        this.setState({
            click:index
        })
    }
    diy(text){
        if(text==='流行'){
            return <button>流行</button>
        }else if(text==='新款'){
            return <span>新款</span>
        }else{
            return <i>精选</i>
        }
    }
    render() {
        return (
            <div>
                <TabControl titles={this.state.titles} click={this.state.click} change={(index)=>this.change(index)} 
                tabClick={(i)=>this.changeText(i)}
                diy={(text)=>this.diy(text)}
                />
                <h1>{this.state.titles[this.state.current]}</h1>
            </div>
        )
    }
}

export default App