import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


export function Home() {
    const navigate=useNavigate()
    function DirectTo(path) {
        
        navigate(path)
    }
    return (
        <div>

            <h1>主页页面</h1>
            <div>
                <Link to="/home/recommend">推荐</Link>
                <Link to="/home/rank">榜单</Link>
                <button onClick={e=>DirectTo("/home/list")}>歌单</button>
            </div>
            {/* 占位组件 */}
            <Outlet />
        </div>
    )
    
}

export default (Home)