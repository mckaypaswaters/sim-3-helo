import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './dashboard.css'
import Post from '../Post/Post'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    handleChange(e){
        this.setState({
            search: e.target.value
        })
    }

    checkbox(){
        if (this.state.userposts === true){
            this.setState({userposts: false})
        } else {
            this.setState({userposts: true})
        }
    }

    componentDidMount(){
        this.search()
        
    }
    search(){
        axios.get(`/api/posts/${this.props.id}?userposts=${this.state.userposts}&search=${this.state.search}`).then(res => {
            // console.log(this.props)
            this.setState({posts: res.data})
        })
    }
    reset(){
        axios.get(`/api/posts/${this.props.id}?userposts=true&search=`).then(res => {
            this.setState({posts: res.data, search: ''})
            this.checkbox()
        })
    }

    render(){
        const mappedPosts = this.state.posts.map((item, i) => (
            <Link to={`/post/${this.props.id}`}>
                <div key={i} className='single-post'>
                    <h2 className='post-title'>{item.title}</h2>
                    <div className="author-and-pic">
                        <h5 className='author'>{item.username}</h5>
                        <img className='post-profile-pic' src={item.profile_pic} alt=""/>
                    </div>
                </div>
            </Link>
            ))
        return(
            <div className='dashboard'>
                <Nav/>
                    <div className="white-space">
                        <div className="search-box">
                            <input onChange={(e) => this.handleChange(e)} className='search-input' type="text" value={this.state.search}/>
                            <i onClick={() => this.search()} className="fas fa-search"></i>
                            <button onClick={() => this.reset()}>Reset</button>
                            My posts<input onChange={e => this.checkbox()} checked={this.state.userposts} type='checkbox'/>
                        </div>
                        <div className="posts-box">
                            <div className="single-post-1">
                                {mappedPosts}
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

export default connect(mapStateToProps)(Dashboard)



