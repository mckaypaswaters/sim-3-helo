import React, {Component} from 'react'
import Nav from '../Nav/Nav'

class Post extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='post'>
                <Nav/>
                Post
            </div>
        )
    }
}

export default Post