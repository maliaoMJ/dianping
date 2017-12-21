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
            <IndexHeader/>
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
                           return (<ListItem item={item} key={item.id}></ListItem>)
                    })
                }
               
            </div>
            <Loadding text="加载更多....."/>
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
 
   }

}
export default AppIndex