import React, { PureComponent } from 'react'
import Home from './Home'
import Profile from './Profile'
import store from './models'
import  './style/style.css'
import { changeCounterAction } from './models/actionCreator'
export class App extends PureComponent {

    constructor(){
        super()
        this.state={
            count:store.getState().count
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            const current= store.getState().count
            console.log("ccc",{current})
            this.setState({
                count:current
            })
        })
        
    }
    render() {
    
        const {count}=this.state


        return (
            <div>
                <h2>App counter:{count}</h2>
                <div className='pages'>
                    <Home count={count}/>
                    <Profile count={count}/>
                </div>
            </div>
        )
    }
}

export default App