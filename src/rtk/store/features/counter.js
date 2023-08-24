import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:99
    },
    reducers:{
        addNumber(state,action){
            return {...state,count:state.count+action.payload}
        },
        subNumber(state,action){
            return {...state,count:state.count-action.payload}
        }
    }
})
export const {addNumber,subNumber}=counterSlice.actions
export default counterSlice.reducer