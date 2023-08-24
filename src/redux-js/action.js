const store =require("./store")

console.log(store.getState())


store.dispatch(changeAgeAction(19))

console.log(store.getState())