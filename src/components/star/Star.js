import React , {Component} from 'react'
import './Star.less'
const TOTALCOUNT = 5
class Star extends Component{

    render(){
        const STARARR = []
        const STAR = this.props.star
        const NOSTAR = TOTALCOUNT - STAR
        for(let i= 0;i<STAR;i++){
            STARARR.push(<i className="fa fa-star active" key={`active${i}`}></i>)
        }
        for (let i = 0; i < NOSTAR; i++) {
            STARARR.push(<i className="fa fa-star" key={`${i}`} ></i>)
        }
        return(
            <div className="Star">
                {
                  STARARR.map((item,index)=>{
                      return (item)
                  }) 
                }
            </div>
        )
    }
}

export default Star