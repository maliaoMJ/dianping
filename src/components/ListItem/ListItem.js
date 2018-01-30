import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './ListItem.less'
class ListItem extends Component{
    render(){
        return(
            <div className="ListItem">
                <Link to='/detail/233' className="link">
                <div className="contentBox">
                    <img src={`http://localhost:5000/imgs?img=${this.props.item.img}`} alt=""/>
                    <div className="info">
                       <p className="top clearfix"><span className="left name">{this.props.item.title}</span><span className="right distance">{this.props.item.distance}m</span></p> 
                       <p className="center ">{this.props.item.subTitle}</p>
                        <p className="bottom clearfix"><span className="left price">￥ {this.props.item.price}</span><span className="right sellCount">已售{this.props.item.number}</span></p>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}
export default ListItem