import React, {Component} from 'react'
import './Loadding.less'
class Loadding extends Component {

    render(){
        return (
            <div className="loaddingBox">
             <i className="fa fa-spinner fa-pulse fa-fw"></i>
               <span className='tipText'>{this.props.text}</span>
            </div>
        )
    }

}
export default Loadding