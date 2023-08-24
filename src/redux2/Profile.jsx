import React, { PureComponent } from 'react'
import store from './models'
import {changeCounterAction} from './models/actionCreator'

export class Profile extends PureComponent {

  minus(num){
    store.dispatch(changeCounterAction(num))
  }
  render() {    
    return (
        <div>
        <h2>
            Profile
        </h2>
        <h3>
        
            当前计数：{this.props.count}
        </h3>
        <button onClick={()=>this.minus(-1)}>-1</button>
        <button onClick={()=>this.minus(-5)}>-5</button>
    </div>
    )
  }
}

export default Profile