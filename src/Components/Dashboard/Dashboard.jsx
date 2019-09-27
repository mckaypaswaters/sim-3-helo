import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './dashboard.css'

class Dashboard extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='dashboard'>
                <Nav/>
                    <div className="white-space">
                        <div className="search-box">
                            <input className='search-input' type="text"/>
                            <i className="fas fa-search"></i>
                            <button>Reset</button>
                            <button>X</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Dashboard