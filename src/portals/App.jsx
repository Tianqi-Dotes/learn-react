import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>app h1</h1>
        {createPortal(<h2>app h2</h2>,document.querySelector("#why"))}
        <Modal>
            <h2>model 标题</h2>
        </Modal>
      </div>
    )
  }
}

export default App