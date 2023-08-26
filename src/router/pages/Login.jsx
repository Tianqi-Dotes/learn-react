import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor(){
    super()
    this.state={
      isLogin:false
    }
  }
  render() {
    const{isLogin}=this.state
    return (
      <div>
        <h1>登录页面</h1>
        {!isLogin?<button onClick={()=>this.setState({isLogin:!isLogin})}>登录</button>:<Navigate to="/home"/>}
      </div>
    )
  }
}

export default Login