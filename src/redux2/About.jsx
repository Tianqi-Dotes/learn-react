import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addCounterAction, subCounterAction } from './models/actionCreator'

export class About extends PureComponent {

  addNum(count) {
    this.props.addNum(count)

  }
  subNum(count) {
    this.props.subNum(count)
  }

  render() {
    const { banners, recommends } = this.props
    console.log("aaa",banners)
    return (
      <div>About
        <div>
          计数：{this.props.count}
        </div>
        <button onClick={() => this.addNum(5)}>+5</button>
        <button onClick={() => this.subNum(5)}>-5</button>

        <div className='banner'>
          <h2>轮播图数据</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
        <div className='commend'>
          <h2>推荐数据</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state){

//   return {
//     count:state.count
//   }
// }

const mapStateToProps = (state) => ({
  
  count: state.count,
  banners: state.banners,
  recommends: state.recommends
})

function changeCounter(dispatch) {
  return {
    addNum(num) {
      dispatch(addCounterAction(num))
    },
    subNum(num) {
      dispatch(subCounterAction(num))
    }
  }
}
// const changeCounter=(dispatch)=>({

// })

export default connect(mapStateToProps, changeCounter)(About)