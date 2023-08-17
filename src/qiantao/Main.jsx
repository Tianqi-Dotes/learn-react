import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {

  constructor(){
    super()
    this.state={
      banners:['youtube','bili','acfun'],
      proList:['hot','seckill','popular']
    }
  }
  render() {

    return (
      <div>
        <MainBanner banners={this.state.banners} title="gg"/>
        <MainProductList proList={this.state.proList}/>
      </div>
    )
  }
}

export default Main