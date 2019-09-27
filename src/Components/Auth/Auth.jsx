import React, {Component} from 'react'
import wink from '../../assets/wink.png'
import './auth.css'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className="auth-parent">
                <div className="auth-box">
                    <img src={wink} alt="winky-logo"/>
                    <h1>Helo</h1>
                    <div className='input-box'>
                        Username:<input type="text"/>
                    </div>
                    <div className='input-box'>
                        Password:<input type="password"/>
                    </div>
                    <nav className="login-register-buttons">
                        <button className='login'>Login</button>
                        <button className='register'>Register</button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Auth