import React, {Component} from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import Star from '../../components/star/Star'
import CommentItem from '../../components/commentItem/CommentItem'
import getData from '../../util/getData'
import './detail.less'

class appDetail extends Component {
   constructor(props){
       super(props)
       this.state = {
           shopInfo:{},
           comments:[]
       }
   }

   render(){
       return (
           <div className="detailPage">
               <BackHeader className="header" history={this.props.history} title="商家详情"></BackHeader>
               <div className="shopInfo">
                   <img src = {`http://localhost:5000/imgs?img=${this.state.shopInfo.img}`} alt=""/>
                    <div className="infoText">
                        <p className="name">{this.state.shopInfo.title}</p>
                        <p className="price">￥{this.state.shopInfo.price}</p>
                       <div className="start"><Star star={this.state.shopInfo.star}></Star></div>
                       <p className="keywords">{this.state.shopInfo.subTitle}</p>
                    </div>
               </div>
               <div className="discribText" dangerouslySetInnerHTML={{ __html: this.state.shopInfo.desc}}>
                  
               </div>
               <div className="userCommentsBox">
                 <h4 className="title">用户点评</h4>
                 <div className="commentsBox">
                       {
                           this.state.comments.map((item,index) => {
                              return (
                                  <CommentItem data ={item} key={index}></CommentItem>  
                              )
                           })
                       }
                       
                 </div>
               </div>
           </div>
       )
   }


   componentDidMount(){
       //获取商家 id
       let id = this.props.match.params.id
       //向后台请求数据
       //1.店家详情数据
       let shopInfo = getData.getDataByGet('http://localhost:5000/api/detail/shopinfo?id=' + id)
       shopInfo
           .then((response) => { return response.json() })
           .then((result) => {
              this.setState({
                  shopInfo:result
              })
           })
           .catch((error) => {
               console.log('获取数据失败！')
           })
       //2.评论数据
       let comments = getData.getDataByGet('http://localhost:5000/api/detail/comments?id=' + id)
       comments
           .then((response) => { return response.json() })
           .then((result) => {
               this.setState({
                   comments: result.data
               })
           })
           .catch((error) => {
               console.log('获取数据失败！')
           })
   }
}


export default appDetail