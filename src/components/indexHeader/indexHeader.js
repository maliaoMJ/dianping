import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './indexHeader.less'
class IndexHeader extends Component {
    render(){
        return (
            <div className='indexHeader'>
                <div className="cityBox">
                    <Link to='/city' className="cityText">
                       <span className="cityName">西安</span>
                       <i className='fa fa-angle-down'></i>
                   </Link>
                </div>
                <div className="searchBox">
                 <div className="center">
                     <i className='fa fa-search'></i>
                     <input type="text" placeholder='请输入关键词'/>
                 </div>
                </div>
                <div className="userBox">
                    <Link to='/user/all' className="cityText">
                 <i className='fa fa-user-circle-o'></i>
                 </Link>
                </div>
            </div>
        )
    }
}
export default IndexHeader