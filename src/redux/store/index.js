const {createStore}=require("redux")

const defaultState={
    age:18

}
function reducer(state=defaultState,action)
{
    if('changeAge'===action.type){
        return {...state,age:action.age}
    }
    return state
}

const store=createStore(reducer)

module.exports=store
