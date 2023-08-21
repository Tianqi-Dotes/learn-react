import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Form extends Component {
    static propTypes = {}
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            isAgree: false,
            hobbies: [
                { "name": "sing", value: '唱', isChecked: false },
                { "name": "dance", value: '跳', isChecked: false },
                { "name": "rap", value: 'rap', isChecked: false },
            ],
            select:'apple',
            selects:['orange']
        }
    }
    handleSelect(event){
        this.setState({
            select:event.target.value
        })

    }
    handleSelects(event){
        const options= Array.from( event.target.selectedOptions)

        const values=options.map(e=>e.value)
        console.log(values)
        this.setState({
            selects:values
        })

    }
    handleSubmitClick(event) {
        event.preventDefault()

    }
    listenUsernameChange(event) {
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    listenPasswordChange(event) {
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    handleInputChange(e) {
        const key = e.target.name
        this.setState({
            [key]: e.target.value
        })
    }
    handleCheckbox(e) {
        this.setState({
            isAgree: e.target.checked
        })
    }
    handleCheckboxs(e) {
        const array = [...this.state.hobbies]

        const change = array.filter(el => el.name === e.target.id)

        change[0].isChecked = e.isChecked
        this.setState({
            hobbies: array
        })
    }

    render() {
        const { username, password, isAgree, hobbies,select,selects } = this.state
        return (
            <div>
                <form onSubmit={e => this.handleSubmitClick(e)}>
                    <label htmlFor="username">
                        用户名：
                        <input type="text" name='username' id='username' value={username} onChange={e => this.listenUsernameChange(e)} />
                    </label>
                    <label htmlFor="password">
                        密码：
                        <input type="text" name='password' id='password' value={password} onChange={e => this.listenPasswordChange(e)} />
                    </label>
                    <div>
                        您的爱好：
                        {hobbies.map(el => {
                            return <label htmlFor={el.name}>
                                    <input type='checkbox' id={el.name} checked={el.isChecked} onChange={e => this.handleCheckboxs(e)}/>
                                    {el.value}
                                </label>
                        })}
                    </div>
                    <div>
                        <label htmlFor='agree'>
                            <input type='checkbox' id='agree' checked={isAgree} onChange={e => this.handleCheckbox(e)}></input>
                            同意协议
                        </label>
                    </div>
                    {/* <select value={select} onChange={e=>this.handleSelect(e)}>
                        <option value="apple">苹果</option>
                        <option value="orange">橘子</option>
                        <option value="banana">香蕉</option>
                    </select> */}
                    <div>
                        <select value={selects}  multiple onChange={e=>this.handleSelects(e)} >
                        <option value="apple">苹果</option>
                        <option value="orange">橘子</option>
                        <option value="banana">香蕉</option>
                        </select>
                    </div>


                    <div><button type='submit'>注册</button></div>

                </form>
            </div>
        )
    }
}

export default Form