import React, {Component} from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import Star from '../../components/star/Star'
import CommentItem from '../../components/commentItem/CommentItem'
import getData from '../../util/getData'
import Loadding from '../../components/Loading/Loadding'
import './detail.less'

class appDetail extends Component {
   constructor(props){
       super(props)
       this.state = {
           shopInfo:{},
           comments:[],
           hasMore:true
       }
   }

   render(){
       return (
           <div className="detailPage">
               <BackHeader className="header" history={this.props.history} title="商家详情"></BackHeader>
               <div className="shopInfo">
                   <img src = {`http://114.67.151.28:5000/imgs?img=${this.state.shopInfo.img}`} alt=""/>
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
               <Loadding text="加载更多....." ref='loaddingElemet' />
           </div>
       )
   }


   componentDidMount(){
       //获取商家 id
       let id = this.props.match.params.id
       //向后台请求数据
       //1.店家详情数据
       let shopInfo = getData.getDataByGet('http://114.67.151.28:5000/api/detail/shopinfo?id=' + id)
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
       let comments = getData.getDataByGet('http://114.67.151.28:5000/api/detail/comments?id=' + id)
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
       //3.获取节点
       //获取loaddingBox Dom节点
       let LoaddingBox = this.refs.loaddingElemet
       let loaddingElemet = LoaddingBox.refs.loaddingBox
       let isMore = true
       //4.监听滚动事件
       window.onscroll = (e) => {
           //设备屏幕高度
           let ScreenY = window.screen.height
           //获取loaddingBox 距离顶部的高度
           let loaddingBoxTop = loaddingElemet.getBoundingClientRect().top;
           if (loaddingBoxTop - ScreenY < -30) {
               if (isMore) {
                   //更改加载状态    
                   isMore = false
                   //判断是否为首页
                   let pathName = this.props.history.location.pathname
                   if (pathName === '/detail/233') {
                       //加载数据
                       // 
                       setTimeout(() => {// 模拟慢网速 //这离可以向后台传入pageSize =1,2,3..... 设置一个pageSize变量 pageSize++
                           let MoreData = getData.getDataByGet('http://114.67.151.28:5000/api/detail/comments?id=' + id)
                           MoreData
                               .then((response) => {
                                   return response.json()
                               })
                               .then((result) => {
                                   //设置listData
                                   this.setState({
                                       comments: this.state.comments.concat(result.data),
                                       hasMore: result.hasMore
                                   })
                                   //设置加载状态800 防止过度触发无限加载
                                   setTimeout(() => {
                                       isMore = true
                                   }, 800);
                               })
                               .catch((error) => {
                                   console.log('获取首页列表失败')
                               })
                       }, 500);
                   }
               }
           }
           //    阻止默认事件和事件冒泡
           e.preventDefault()
           e.stopPropagation()
       }
   }
}


export default appDetail