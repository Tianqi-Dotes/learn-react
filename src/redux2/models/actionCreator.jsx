import * as actions from './constants'


export const changeCounterAction=(count)=>{
    return {
        type:actions.CHANGE_COUNT,
        count:count
    }
}

