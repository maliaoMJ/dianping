import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class appDetail extends Component {
   constructor(props){
       super(props)
       console.log(this.props)
   }

   render(){
       return (
           <div>
               this is detail page
               <NavLink to='/'>index page</NavLink>
               <div>
               
               </div>
           </div>
       )
   }
}


export default appDetail