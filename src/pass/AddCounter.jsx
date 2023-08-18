import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddCounter extends Component {

  add(count){
    this.props.changeCount(count)
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.add(1)}>+1</button>
        <button onClick={()=>this.add(2)}>+2</button>
        <button onClick={()=>this.add(5)}>+5</button>
      </div>
    )
  }
}

AddCounter.propTypes={
  changeCount:PropTypes.func.isRequired
}
export default AddCounter