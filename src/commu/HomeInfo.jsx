import React, { Component } from 'react'
import ThemeContext from './context/ThemeContext'
import UserContext from './context/UserContext'


export class HomeInfo extends Component {
  render() {
    console.log(this.context)
    return (

      <div>
        <span>HomeInfo</span>
        <UserContext.Consumer>
            {value=>{
                return <h2>user:{value.id}</h2>
            }}
        </UserContext.Consumer>
      </div>
    )
  }
}


HomeInfo.contextType=ThemeContext

export default HomeInfo