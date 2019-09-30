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
                {/* <h2 className="post-title">Test</h2>
                <h5 className="author">Test</h5> */}
            </div>
        )
    }
}

export default Post