import React, { PureComponent } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import withRouter from './hoc/withRouter'

export class Home extends PureComponent {
    directTo(path) {
        console.log(this.props.router)
        const {navigate} = this.props.router
        navigate(path)
    }
    render() {
        return (
            <div>

                <h1>主页页面</h1>
                <div>
                    <Link to="/home/recommend">推荐</Link>
                    <Link to="/home/rank">榜单</Link>
                    <button onClick={e => this.directTo("/home/list")}>歌单</button>
                </div>
                {/* 占位组件 */}
                <Outlet />
            </div>
        )
    }
}
export default withRouter(Home)