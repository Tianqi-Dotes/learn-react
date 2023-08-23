import React, { PureComponent } from 'react'
import store from './models'
import {changeCounterAction} from './models/actionCreator'

export class Home extends PureComponent {
  addNumber(num){
    console.log(num)
    store.dispatch(changeCounterAction(num))
  }
  render() {
    return (
        <div>
        <h2>
            Home
        </h2>
        <h3>
            当前计数：{this.props.count}
        </h3>
        <button onClick={()=>this.addNumber(1)}>+1</button>
        <button onClick={()=>this.addNumber(5)}>+5</button>
    </div>
    )
  }
}

export default Home