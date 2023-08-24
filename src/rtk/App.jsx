import React, { PureComponent } from 'react'
import './style/style.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {connect} from 'react-redux'


export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App counter:{this.props.counter.count}</h2>
        <div className='pages'>
          <Home/>
          <Profile/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  
  counter: state.counter
})


export default connect(mapStateToProps,null)(App) 