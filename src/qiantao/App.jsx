import React, { Component } from 'react'
import Header from './Header'
import Footor from './Footer'
import Main from './Main'



 class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Main/>

        <Footor/>
      </div>
    )
  }
}

export default App