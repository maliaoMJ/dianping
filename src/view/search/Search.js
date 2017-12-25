import React,{Component} from 'react'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import { modifySearchResult } from '../../actions/actions'
import ListItem from '../../components/ListItem/ListItem'
import Store from '../../store/store'
import getData from '../../util/getData'
import Loadding from '../../components/Loading/Loadding'
import './Search.less'


class Search extends Component{

   constructor(props){
       super(props)
       this.state={
           hasMore:true,
           listData: Store.getState().reducers.searchResult
       }
       
   }

    render(){
        return (
            <div className="SearchPage">
                <SearchHeader history={this.props.history}></SearchHeader>
                {/* 遍历和渲染列表组件 */}
                {
                this.state.listData.map((item, index) => {
                        return (<ListItem item={item} key={index}></ListItem>)
                    })
                }
                <Loadding text="加载更多....." ref='loaddingElemet' />
            </div>
        )
    }
    componentDidMount(){
        
        //1.获取节点
        //获取loaddingBox Dom节点
        let LoaddingBox = this.refs.loaddingElemet
        let loaddingElemet = LoaddingBox.refs.loaddingBox
        let isMore = true
        //3.监听滚动事件
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
                    if (pathName === '/search') {
                        //加载数据
                        // 
                        setTimeout(() => {// 模拟慢网速 //这离可以向后台传入pageSize =1,2,3..... 设置一个pageSize变量 pageSize++
                            let MoreData = getData.getDataByGet('http://114.67.151.28:5000/api/search')
                            MoreData
                                .then((response) => {
                                    return response.json()
                                })
                                .then((result) => {
                                    
                                    //redux 
                                    let prevSearch = Store.getState().reducers.searchResult
                                    Store.dispatch(modifySearchResult(prevSearch.concat(result.data)))
                                    //设置listData
                                    this.setState({
                                        hasMore: result.hasMore,
                                        listData: Store.getState().reducers.searchResult
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

export default Search