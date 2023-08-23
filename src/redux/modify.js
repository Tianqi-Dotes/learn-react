const store =require("./store")
const {changeAgeAction} =require('./store/actionCreators')

console.log(store.getState())

const nameAction={type:"changeAge",age:19}
store.dispatch(changeAgeAction(19))

console.log(store.getState())