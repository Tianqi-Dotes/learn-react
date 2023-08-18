import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/ThemeContext'
import UserContext from './context/UserContext'




export class App extends Component {

  render() {
    return (
      <div>
        <h2>App</h2>
        <UserContext.Provider value={{ id: 110 }}>
          <ThemeContext.Provider value={{ color: "red", size: 30 }}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App