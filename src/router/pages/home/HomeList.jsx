import React, { PureComponent } from 'react'
import {withRouter} from '../hoc'

export class HomeList extends PureComponent {
  constructor() {
    super()
    this.state = {
      list: [
        { id: 111, name: "华语经典" },
        { id: 222, name: "古典音乐" },
        { id: 333, name: "民谣乐曲" },
      ]
    }
  }
  naviTo(id) {
    console.log(id)
    const {navigate} = this.props.router
    navigate("/detail/"+id)
  }
  render() {
    const { list } = this.state
    return (
      <div>
        <h2>歌单页面</h2>
        <ul>
          {list.map(el => {
            return <li key={el.id} onClick={e => this.naviTo(el.id)}>{el.name}</li>            
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeList)