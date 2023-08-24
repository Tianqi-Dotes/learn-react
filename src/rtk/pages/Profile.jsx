import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

export class Profile extends PureComponent {
  render() {
    return (
      <div>Profile
        <h2>home counter:{this.props.counter.count}</h2>
        <div className='banner'>
          <h2>轮播图数据</h2>
          <ul>
            {this.props.banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
        <div className='recommend'>
          <h2>推荐数据</h2>
          <ul>
            {this.props.recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
const mapCounter = (state) => ({
  counter: state.counter,
  banners:state.home.banners,
  recommends:state.home.recommends,
})

export default connect(mapCounter, null)(Profile) 
