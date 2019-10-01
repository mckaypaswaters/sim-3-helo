import React, {Component} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="column-parent">
                <div className='column'>
                    <nav className='first-3'>
                        <img className='profile-pic'src={this.props.profilePic} alt=""/>
                        <h4 className='nav-username'>{this.props.username}</h4>
                        <Link className='link' to='/dashboard'>
                            <i className="home fas fa-home"></i>
                        </Link>
                        <Link className='link' to='/new'>
                            <i className="document far fa-file-alt"></i>
                        </Link>
                    </nav>
                    <Link className='link' to='/'>
                        <i className="power fas fa-power-off"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {username, profilePic} = reduxState
    return {username, profilePic}
}

export default connect(mapStateToProps)(Nav)