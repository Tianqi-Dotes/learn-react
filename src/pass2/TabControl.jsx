import React, { Component } from 'react'
import './TabControl.css'
export class TabControl extends Component {

  change(index){
    console.log("clicked:"+index)
    this.props.change(index)
    this.props.tabClick(index)
  }
  render() {
    const {titles,click}=this.props
    

    return (
      <div  className='tab-control'>
        {
            titles.map((title,index)=>{
              
              console.log(index)
                return <div className={click===index?'item active':'item'} key={title} onClick={()=>this.change(index)}>
                  
                  {/* <span className='text'>{title}</span>*/}
                  {this.props.diy(title)}
                  </div>
            })
        }
      </div>
    )
  }
}

export default TabControl