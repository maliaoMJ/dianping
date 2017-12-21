import React, {Component} from 'react'
import './BackHeader.less'


class BackHeader extends Component{

    //返回函数
    goBack() {
        // history 是由父组件的this.props.history
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="BackHeader">
                <div className="header clearfix">
                    <i className="fa fa-angle-left" onClick={this.goBack.bind(this)}></i>
                    <span className="title">{this.props.title}</span>
                </div>
            </div>
        )
    }
}
export default BackHeader