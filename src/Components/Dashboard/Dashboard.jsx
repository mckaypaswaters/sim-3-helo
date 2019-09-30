import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './dashboard.css'
import Post from '../Post/Post'
import axios from 'axios'

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
        axios.get(`/api/posts/17?userposts=${this.state.userposts}&search=${this.state.search}`).then(res => {
            this.setState({posts: res.data})
        })
    }

    render(){
        const mappedPosts = this.state.posts.map(item => (
            <div className='single-post'>
                <h2 className='post-title'>{item.title}</h2>
                <div className="author-and-pic">
                    <h5 className='author'>{item.username}</h5>
                    <img className='post-profile-pic' src={item.profile_pic} alt=""/>
                </div>
            </div>
            ))
        return(
            <div className='dashboard'>
                <Nav/>
                    <div className="white-space">
                        <div className="search-box">
                            <input onChange={(e) => this.handleChange(e)} className='search-input' type="text"/>
                            <i onClick={() => this.search()} className="fas fa-search"></i>
                            <button>Reset</button>
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

export default Dashboard



