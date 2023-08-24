import React, { PureComponent } from 'react'

import {queryDataAction} from './store2/actionCreator'
import { connect } from 'react-redux'

export class Category extends PureComponent {

    componentDidMount() {
        // axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        //     const banners = res.data.data.banner.list
        //     const recommends = res.data.data.recommend.list
        //     console.log(banners)
        //     this.props.addBanners(banners)
        //     this.props.addCommends(recommends)
        // })   
        this.props.query()
    }

    render() {
        return (
            <div>Category</div>
        )
    }
}
const setData=(dispatch)=>( {
     
        // addBanners(b) {
        //     dispatch(action.addBannersAction(b))
        // },
        // addCommends(c) {
        //     dispatch(action.addCommendsAction(c))
        // },
        query() {
            dispatch(queryDataAction())
        }
        
    
})
export default connect(null,setData)(Category)
