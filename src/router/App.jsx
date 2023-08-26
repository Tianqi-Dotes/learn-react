import React from 'react'
import { Link, useNavigate, useRoutes } from 'react-router-dom'

import routes from './router'

export function App() {
    const navi=useNavigate()
    function directTo(path) {
        //useNavigate()
        navi(path)
    }

    return (
        <div className='app'>
            <div className='header'>
                <span>header</span>
                <Link to="/home">首页</Link>
                <Link to="/about">关于</Link>
                <Link to="/login">登录</Link>
                <button onClick={() => directTo("/cate")}>分类</button>
                <span onClick={() => directTo("/order")}>订单</span>
                <Link to="/user?key=123&pass=321">用户</Link>
                <hr />
            </div>
            <div className='content'>
                {useRoutes(routes)}

            </div>
            {/* 路径传参 */}
            {/* 
                    <Routes>
                        <Route path='/' element={<Navigate to="/home" />} />
                        <Route path='/home' element={<Home />}>
                            <Route path='/home' element={<Navigate to="/home/recommend" />} />
                            <Route path='/home/recommend' element={<HomeRecommend />} />
                            <Route path='/home/rank' element={<HomeRank />} />
                            <Route path='/home/list' element={<HomeList />} />
                        </Route>
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/cate' element={<Cate />} />
                        <Route path='/order' element={<Order />} />
                        <Route path='/user' element={<User />} />
                        
                        <Route path='/detail/:id' element={<Detail />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes> */}
            <div className='footer'>
                <hr />
                footer
            </div>
        </div>
    )
}


export default App