import React, { PureComponent } from 'react'
import {withRouter} from './hoc'

export class User extends PureComponent {
  render() {
    console.log(this.props)
    const {key,pass}=this.props.router.obj
    return (
      <div>User
        <h2>username:{key}</h2>
        <h2>password:{pass}</h2>
      </div>
    )
  }
}

export default withRouter(User)