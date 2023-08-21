import React, { PureComponent } from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            isShow:true
        }
    }
    
  render() {
    const {isShow}=this.state
    return (
      
      <div>
        <CSSTransition in={isShow} classNames="why" timeout={2000} unmountOnExit={true} appear
         onEnter={e=>console.log("开始进入")}
         onEntering={e=>console.log("开始执行")}
         onEntered={e=>console.log("执行结束")}
           >
          <h2 >哈哈哈</h2>
        </CSSTransition>
        <button onClick={()=>this.setState({isShow:!isShow})}>切换</button>
      </div>
    )
  }
}

export default App