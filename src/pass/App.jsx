import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 1000
    }
  }

  changeCount(count){
    this.setState({
      count:this.state.count+count
    })
  }
  render() {
    const { count } = this.state
    return (


      <div>
        <h2>当前计数：{count}</h2>
        <AddCounter changeCount={(count)=>this.changeCount(count)}/>

        <SubCounter changeCount={(count)=>this.changeCount(count)}/>
      </div>
    )
  }
}

export default App