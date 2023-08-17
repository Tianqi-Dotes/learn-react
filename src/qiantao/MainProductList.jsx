import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {

    const {proList}=this.props
    return (
      <div>
        <h2>商品类型</h2>
        <ul>
          {proList.map(item=>{
            return <li key={item}>{item}</li>
          })}
        </ul>
        <h2>商品列表</h2>
        <ul>
            <li>product1</li>
            <li>product2</li>
            <li>product3</li>
        </ul>
      </div>
    )
  }
}

export default MainProductList