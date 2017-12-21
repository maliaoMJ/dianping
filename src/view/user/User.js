import React, { Component } from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import './User.less'


class User extends Component{
  
    render(){
        return (
            <div className="User">
                <BackHeader title="用户详情" history={this.props.history}></BackHeader>
            </div>
        )
    }
}

export default User