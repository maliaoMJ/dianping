import React, {Component} from 'react'

import IndexHeader from '../../components/indexHeader/indexHeader'
import Swiper from '../../components/Swiper/Swiper'
import Loadding from '../../components/Loading/Loadding'
import ListItem from '../../components/ListItem/ListItem'
import getData from '../../util/getData'
import 'whatwg-fetch'
import './index.less'
// 首页视图
class AppIndex extends Component {
   constructor(props, context){
       super(props)
       this.state={
           adData:[],
           listData:[],
           hasMore:false
       }
   }
   render(){
       return(
           <div className='index'>
            <IndexHeader history = {this.props.history}/>
            <Swiper/>
            <div className="advertisementBox">
                <div className="box">
                    <div className="title">
                        <h3>超值特惠</h3>
                    </div>
                    <div className="row clearfix">
                        {/* 遍历和渲染广告数据 */}
                        {this.state.adData.map((item,index)=>{
                               return (<div className='col' key={item.img}><a href={item.link}><img src={`http://localhost:5000/imgs?img=${item.img}`} alt="" title={item.title} /></a></div>)
                        })}
                        
                    </div>
                </div>
            </div>
            <div className="likeBox">
                <h3 className='title'>猜你喜欢</h3>
                {/* 遍历和渲染列表组件 */}
                {
                    this.state.listData.map((item, index)=>{
                           return (<ListItem item={item} key={index}></ListItem>)
                    })
                }
               
            </div>
            <Loadding text="加载更多....." ref='loaddingElemet'/>
           </div>
       )
   }
   componentDidMount(){
       // 1.获取首页广告数据 返回的结果均为Promise
       let AdData = getData.getDataByGet('http://localhost:5000/api/home/ad')
           AdData
           .then((response)=>{return response.json()})
           .then((result)=>{
               //设置state adData
               this.setState({
                   adData: result 
               })
           })
           .catch((error)=>{
               console.log('获取数据失败！')
           })
       // 2.获取首页推荐列表数据 返回的结果均为Promise
       let ListData = getData.getDataByGet('http://localhost:5000/api/home/list')
       ListData
       .then((response)=>{
           return response.json()
       })
       .then((result)=>{
           //设置listData
           this.setState({
               listData:result.data,
               hasMore:result.hasMore
           })
       })
       .catch((error)=>{
           console.log('获取首页列表失败')
       })
       //3.获取节点
       //获取loaddingBox Dom节点
       let LoaddingBox = this.refs.loaddingElemet
       let loaddingElemet = LoaddingBox.refs.loaddingBox
       let isMore = true
       //4.监听滚动事件
       window.onscroll=(e)=>{
           //设备屏幕高度
           let ScreenY = window.screen.height
           //获取loaddingBox 距离顶部的高度
           let loaddingBoxTop = loaddingElemet.getBoundingClientRect().top;
           if(loaddingBoxTop - ScreenY < -30){
               if(isMore){
                //更改加载状态    
                isMore = false
                //判断是否为首页
                   let pathName = this.props.history.location.pathname
                   if(pathName === '/'){
                       //加载数据
                       // 
                       setTimeout(() => {// 模拟慢网速 //这离可以向后台传入pageSize =1,2,3..... 设置一个pageSize变量 pageSize++
                           let MoreData = getData.getDataByGet('http://localhost:5000/api/home/list')
                           MoreData
                               .then((response) => {
                                   return response.json()
                               })
                               .then((result) => {
                                   //设置listData
                                   this.setState({
                                       listData: this.state.listData.concat(result.data),
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
export default AppIndex