import React, {Component} from 'react'
import NoList from '../NoList/NoList'

class PendingPayList extends Component{
    render(){
        return(
            <div className="PendingPayList">
                <NoList></NoList>
            </div>         
        )
    }
}

export default PendingPayList