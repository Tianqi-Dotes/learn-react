import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from "axios"

export class Main extends Component {

  constructor(){
    super()
    this.state={
      banners:[],
      proList:[]
    }
  }


  componentDidMount(){
    axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
      const banners=res.data.data.banner.list
      const recommend=res.data.data.recommend.list
      this.setState({
        banners,
        proList:recommend
      })
    })
  }
  render() {

    return (
      <div>
        <MainBanner banners={this.state.banners} title="gg"/>
        <MainBanner />
        <MainProductList proList={this.state.proList}/>
      </div>
    )
  }
}

export default Main