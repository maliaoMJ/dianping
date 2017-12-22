import React,{Component} from 'react'
import './NoList.less'

class NoList extends Component{
   
    render(){
        return (
            <div className="NoList">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                <p>暂无该类订单</p>
            </div>
        )
    }
}

export default NoList