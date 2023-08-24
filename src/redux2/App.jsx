import React, { PureComponent } from 'react'
import Home from './Home'
import Profile from './Profile'
import About from './About'
import store from './models'
import  './style/style.css'
import { changeCounterAction } from './models/actionCreator'
import Category from './Category'
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
                    <About/>
                    <Category/>
                </div>
                
            </div>
        )
    }
}

export default App