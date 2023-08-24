import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchDataAction=createAsyncThunk("fetchData", async ()=>{

    const res=await axios.get("http://123.207.32.32:8000/home/multidata")
    // const banners = res.data.data.banner.list
    // const recommends = res.data.data.recommend.list
    return res.data
})

const homeSlice=createSlice({
    name:"home",
    initialState:{
        banners:[],
        recommends:[]
    },
    reducers:{
        addBanner(state,action){
            state.banners=action.payload
        },
        addRecommends(state,action){
            state.recommends=action.payload
        }
    },
    extraReducers:{
        [fetchDataAction.pending](state,action){

        },
        [fetchDataAction.fulfilled](state,action){
            state.banners=action.payload.data.banner.list
            state.recommends=action.payload.data.recommend.list
        },
    }
})
export const {addBanner,addRecommends}=homeSlice.actions
export default homeSlice.reducer