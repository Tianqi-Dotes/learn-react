import React from "react"
import ReactDOM from "react-dom/client"
//import App from './pass2/App'
//import App from './commu/App'
//import App from './bus/App'
//import App from './form/App'
//import App from './portals/App'
//import App from "./animation/App"
//import App from "./animation/switch-transition/App"
//import App from     './css-in-js/App'
//import App from './redux2/App'
import {Provider} from 'react-redux'
//import store from "./redux2/models"
import App from './rtk/App'
import store from './rtk/store/index'

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(

    <Provider store={store}>
    <App />
    </Provider>
)