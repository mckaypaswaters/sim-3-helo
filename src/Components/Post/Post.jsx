import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './post.css'
import noImage from '../../assets/no-image.png'
import axios from 'axios'
import {connect} from 'react-redux'

class Post extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    componentDidMount(){
        console.log(this.props)
        axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <div className='post'>
                <Nav/>
                <div className="whiteboxparent">
                    <div className="whitebox">
                        <div className="post-header">
                            <h1 className='post-title'>Post Title</h1>
                            <h4 className='post-username'>Username</h4>
                            {/* <div className='post-profile-pic1'>Profile Pic</div> */}
                            <img className='post-profile-pic1' src={noImage} alt=""/>
                        </div>
                        <div className="img-content">
                            <img className='post-pic'src={noImage} alt=""/>
                            <div className='post-content'>Content here</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {id} = reduxState
    return {id}
}

export default connect(mapStateToProps)(Post)