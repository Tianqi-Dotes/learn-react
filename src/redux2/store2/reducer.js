import * as actions from './constants'

const defaultState = {
    count: 100,
    banners: [],
    recommends: []

}

function reducer(state = defaultState, action) {

    switch (action.type) {
        case actions.CHANGE_COUNT:
            return { ...state, count: state.count + action.count }
        case actions.ADD_COUNT:
            return { ...state, count: state.count + action.count }
        case actions.SUB_COUNT:
            return { ...state, count: state.count - action.count }
        case actions.ADD_BANNERS:
            return { ...state, banners:  action.banners }
        case actions.ADD_COMMENDS:
            return { ...state, recommends: action.recommends }
        default:
            return state
    }
}
export default reducer