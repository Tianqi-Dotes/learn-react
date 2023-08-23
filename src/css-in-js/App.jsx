import React, { PureComponent } from 'react'
import AppWrapper from  './style.js'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      size:30,
      color:'blue'
    }
  }
  render() {
    const {size,color}=this.state

    return (

        <AppWrapper size={size} color={color}>
          <div className='section'>
          <div className='title'>标题</div>
          <p className='content'>内容</p>
          </div>
          <button onClick={()=>this.setState({color:'green'})}>修改颜色</button>
          
          <div className='footer'>底线</div>
        </AppWrapper>

    )
  }
}

export default App