import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {

  componentDidMount(){
    eventBus.on("bannerPre",this.bannerPre.bind(this))
  }
  bannerPre(id,price){
    console.log("监听到组件pre,价格:"+id+",价格："+price)
  }
  componentWillUnmount(){
    eventBus.off("bannerPre",this.bannerPre)
  }
  render() {
    return (
      <div>
      <h2>App</h2>
        <Home/>
      </div>
    )
  }
}

export default App