import { About } from '../pages/About'
import { Home } from '../pages/Home'
import HomeRank from '../pages/home/HomeRank'
import HomeRecommend from '../pages/home/HomeRecommend'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Cate } from '../pages/Cate'
import { Order } from '../pages/Order'
import { Detail } from '../pages/Detail'
import HomeList from '../pages/home/HomeList'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'

const routes = [
    { path: "/", element: <Navigate to="/home" /> },

    {
        path: "/home", element: <Home />, children: [
            { path: "/home", element: <Navigate to="/home" /> },
            { path: "/home/recommend", element: <HomeRecommend /> },
            { path: "/home/rank", element: <HomeRank /> },
            { path: "/home/list", element: <HomeList /> },
        ]
    }, { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "/cate", element: <Cate /> },
    { path: "/order", element: <Order /> },
    { path: "/detail/:id", element: <Detail /> },
    { path: "/user", element: <User /> },
    { path: "*", element: <NotFound /> },
]

export default routes