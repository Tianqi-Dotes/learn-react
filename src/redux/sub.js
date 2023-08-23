const store =require("./store")

store.subscribe(()=>{
    console.log("变化：",store.getState())
})

const nameAction={type:"changeAge",age:19}
store.dispatch(nameAction)

