import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor(props){
    super(props)
  }
  static defaultProps={
    banners:[],
    title:"默认标题"
  }


  render() {
    console.log(this.props)
    const {banners}=this.props

    return (
      <div>
        <h2>轮播图+{this.props.title}</h2>
        <ul>
          {
          banners.map(item=>{
            return <li key={item.acm}>{item.title}</li>
          })
          }
        </ul>
      </div>
    )
  }
}

MainBanner.propTypes={
  banners:PropTypes.array.isRequired,
  title:PropTypes.string
}
// MainBanner.defaultProps={
//   banners:[],
//   title:"默认标题"
// }

export default MainBanner