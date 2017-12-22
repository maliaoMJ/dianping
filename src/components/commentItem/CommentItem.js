import React, {Component} from 'react'
import Star from '../star/Star'
import './CommentItem.less'

class CommentItem extends Component{
 
   render(){
       return(
           <div className="CommentItem">
               <div className="top">
                   <div className="user"><i className="fa fa-user"></i>&nbsp;<span className="number">{this.props.data.username}</span></div>
                   <div className="starBox"><Star star={this.props.data.star}></Star></div>
               </div>
               <div className="content">
                   {this.props.data.comment}
               </div>
           </div>
       )
   }
}

export default CommentItem