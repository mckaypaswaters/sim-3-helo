import React, {Component} from 'react'
import wink from '../../assets/wink.png'
import './auth.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import sweet from 'sweetalert2'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    async register(){
        const {username, password} = this.state
        const res = await axios.post('/auth/register', {username, password})
        sweet.fire({type: 'success', text: res.data.message})
    }
    async login(){
        const {username, password} = this.state
        const res = await axios.post('/auth/login', {username, password})
        sweet.fire({type: 'success', text: res.data.message})
    }

    render(){
        return(
            <div className="auth-parent">
                <div className="auth-box">
                    <img src={wink} alt="winky-logo"/>
                    <h1>Helo</h1>
                    <div className='input-box'>
                        Username:<input onChange={e => this.handleChange(e, 'username')} type="text"/>
                    </div>
                    <div className='input-box'>
                        Password:<input onChange={e => this.handleChange(e, 'password')} type="password"/>
                    </div>
                    <nav className="login-register-buttons">
                        {/* <Link to='/dashboard'> */}
                            <button onClick={() => this.login()}className='login'>Login</button>
                        {/* </Link> */}
                        <Link to='/dashboard'>
                            <button onClick={() => this.register()}className='register'>Register</button>
                        </Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Auth