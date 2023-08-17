import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props){
    super(props)
  }


  render() {
    console.log(this.props)
    const {banners}=this.props
    return (

      <div>
        <h2>轮播图</h2>
        <ul>
          {banners.map(item=>{
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default MainBanner