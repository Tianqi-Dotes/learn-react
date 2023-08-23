
import { CHANGE_COUNT } from './constants'

const defaultState={
    count:100

}

function reducer(state = defaultState, action) {

    switch (action.type) {
        case CHANGE_COUNT:
            return { ...defaultState, count: state.count + action.count }
        default:
            return state
    }
}
export default reducer