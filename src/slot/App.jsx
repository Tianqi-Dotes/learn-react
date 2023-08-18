import React, { Component } from 'react'
import NaviBar from './NaviBar'
import NaviBarT from './NaviBarT'
import './style.css'

export class App extends Component {
  render() {
    return (
      <div>
        <NaviBar>
            <button>按钮</button>
            <h2>标题</h2>
            <i>斜体字</i>
        </NaviBar>

        <NaviBarT
            leftSlot={123}
            centerSlot={321}
            rightSlot={1}
        />
      </div>
    )
  }
}

export default App