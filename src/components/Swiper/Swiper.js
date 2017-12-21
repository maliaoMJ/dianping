import React, {Component} from 'react'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils';
import './Swiper.less'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
class Swiper extends Component{
    constructor(props){
        super(props)
        this.state={index:0}
    }
    // 获取当前的广告轮播图index
  handleChangeIndex(index){
      //设置index到点击的页
      this.setState({
          index
      })
  }
  changeIndex(index){
   this.setState({index})
  }
   render(){
       const {index} = this.state
       return (
           <div className="swiperBox">
               <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex.bind(this)} index={index}>
                     <div className="sliderItem silderOne">
                       <div className="ItemBox">
                          <ul>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126194705meishi.png" alt=""/><span className="text">美食</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png" alt=""/><span className="text">猫眼电影</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png" alt=""/><span className="text">酒店</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png" alt=""/><span className="text">休闲娱乐</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203251waimai.png" alt=""/><span className="text">外卖</span></a></li>
                          </ul>    
                       </div>
                       <div className="ItemBox">
                          <ul>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160204172927huoguo.png" alt=""/><span className="text">火锅</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126202946liren.png" alt=""/><span className="text">丽人</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160314121215icongouwu135.png" alt=""/><span className="text">购物</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png" alt=""/><span className="text">周边游</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203542ktv.png" alt=""/><span className="text">KTV</span></a></li>
                          </ul>    
                       </div>
                     </div>    
                     <div className="sliderItem silderTwo">
                       <div className="ItemBox">
                          <ul>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203830jiehun.png" alt=""/><span className="text">婚纱摄影</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20170308125500community_new.png" alt=""/><span className="text">生活服务</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126205135jingguan.png" alt=""/><span className="text">景点</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203742aiche.png" alt=""/><span className="text">爱车</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203617jianshen.png" alt=""/><span className="text">运动建康</span></a></li>
                          </ul>    
                       </div>
                       <div className="ItemBox">
                          <ul>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203905qinzi.png" alt=""/><span className="text">亲子</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20171009183850zhaungxiugongsi.png" alt=""/><span className="text">家装</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/gp/cms/1455525720807.png" alt=""/><span className="text">学习培训</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126204327yiliao.png" alt=""/><span className="text">医疗健康</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160204173511zizhucan.png" alt=""/><span className="text">自助餐</span></a></li>
                          </ul>    
                       </div>
                     </div> 
                     <div className="sliderItem silderThree">
                       <div className="ItemBox">
                          <ul>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126194705meishi.png" alt=""/><span className="text">美食</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png" alt=""/><span className="text">猫眼电影</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png" alt=""/><span className="text">酒店</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png" alt=""/><span className="text">休闲娱乐</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203251waimai.png" alt=""/><span className="text">外卖</span></a></li>
                          </ul>    
                       </div>
                       <div className="ItemBox">
                          <ul>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126194705meishi.png" alt=""/><span className="text">美食</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png" alt=""/><span className="text">猫眼电影</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png" alt=""/><span className="text">酒店</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png" alt=""/><span className="text">休闲娱乐</span></a></li>
                              <li className="item"><a href="/"><img src="http://www.dpfile.com/sc/eleconfig/20160126203251waimai.png" alt=""/><span className="text">外卖</span></a></li>
                          </ul>    
                       </div>
                     </div>    
               </AutoPlaySwipeableViews> 
               <div className="dotBox">
                   <ul>
                       <li className={index===0?'active':''} onClick={this.changeIndex.bind(this,0)}></li>
                       <li className={index===1?'active':''} onClick={this.changeIndex.bind(this,1)}></li>
                       <li className={index===2?'active':''} onClick={this.changeIndex.bind(this,2)}></li>
                   </ul>
               </div>
           </div>
       )
   }
   componentDidMount(){
       //请求广告轮播图数据
   }

}
export default Swiper