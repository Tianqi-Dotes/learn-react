import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import HomeInfo from './HomeInfo'

export class Home extends Component {
  render() {
    return (
      <div>

        <HomeInfo></HomeInfo>
        <HomeBanner/>
      </div>
      
    )
  }
}

export default Home