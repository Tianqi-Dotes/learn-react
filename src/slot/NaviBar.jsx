import React, { Component } from 'react'

export class NaviBar extends Component {
  render() {


    const eles= this.props.children
    return (
     
    <div className='nav-bar'>
        <div className='left'>{eles[0]}</div>
        <div className='center'>{eles[1]}</div>
        <div className='right'>{eles[2]}</div>
      </div>
    )
  }
}

export default NaviBar