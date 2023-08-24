import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {addNumber,subNumber} from '../store/features/counter.js'
// import store from '../store/index'
import { fetchDataAction} from '../store/features/home'
// import axios from 'axios'

export class Home extends PureComponent {
  
  componentDidMount(){
    this.props.fetchData()
  }


  render() {
    
    return (
      <div>Home
        <h2>home counter:{this.props.counter.count}</h2>
        <button onClick={()=>this.props.addNumber(5)}>+5</button>
        <button onClick={()=>this.props.subNumber(5)}>-5</button>
      </div>
    )
  }
}
const mapCounter=(state)=>({
  counter: state.counter
})

const mapCounterMethod=(dispatch)=>({
  addNumber(num){
      dispatch(addNumber(num))
  }, 
  subNumber(num){
    dispatch(subNumber(num))
  },
  fetchData(){
    dispatch(fetchDataAction())
  }
})

export default connect(mapCounter,mapCounterMethod)(Home) 