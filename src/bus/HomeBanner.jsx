import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HomeBanner extends Component {

    pre(){
      eventBus.emit("bannerPre",18,1.88)
    }
    next(){
      eventBus.emit("bannerNext",18,1.88)
    }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>

        <button onClick={()=>this.pre()}>上一个</button>
        <button onClick={()=>this.next()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner