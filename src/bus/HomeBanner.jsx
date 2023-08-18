import React, { Component } from 'react'

export class HomeBanner extends Component {

    pre(){

    }
    next(){

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