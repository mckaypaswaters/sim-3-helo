import React, {Component} from 'react'
import Nav from '../Nav/Nav'

class Dashboard extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='dashboard'>
                <Nav/>
                Dashboard
            </div>
        )
    }
}

export default Dashboard