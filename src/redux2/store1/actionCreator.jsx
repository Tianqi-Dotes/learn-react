import * as actions from './constants'
import axios from 'axios'


export const changeCounterAction=(count)=>{
    return {
        type:actions.CHANGE_COUNT,
        count:count
    }
}

export const addCounterAction=(count)=>{
    return {
        type:actions.ADD_COUNT,
        count:count
    }
}
export const subCounterAction=(count)=>{
    return {
        type:actions.SUB_COUNT,
        count:count
    }
}
export const addBannersAction=(banners)=>{
    return {
        type:actions.ADD_BANNERS,
        banners:banners
    }
}
export const addCommendsAction=(recommends)=>{
    return {
        type:actions.ADD_COMMENDS,
        recommends:recommends
    }
}
export const queryDataAction=()=>{
    function get(dispatch,getState){

        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        const banners = res.data.data.banner.list
        const recommends = res.data.data.recommend.list
        console.log(banners)
 
        // dispatch({type:actions.ADD_BANNERS,banners})
        // dispatch({type:actions.ADD_COMMENDS,recommends})
        dispatch(addBannersAction(banners))
        dispatch(addCommendsAction(recommends))
        
        })
    }

    return  get
        
    
}