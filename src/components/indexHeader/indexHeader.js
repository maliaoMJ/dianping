import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import getData from '../../util/getData'
import { modifySearchKeywords, modifySearchResult} from '../../actions/actions'
import Store from '../../store/store'
import './indexHeader.less'
class IndexHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            keywords:''
        }
        this.cityName = Store.getState().reducers.cityName
    }
    //onUser
    onUser(){
        let userName = Store.getState().reducers.userName
        console.log(userName)
        if(userName == null || userName ===''){
            this.props.history.push('/login')
        }else{
            this.props.history.push('/user/all')
        }
    }
    onSearch(e){
        //按下enter键触发事件
        if(e.keyCode === 13){
            //获取用户的输入内容
            let userContents = e.target.value
            //对用户输入的内容进行处理
            /**去掉字符串前后所有空格*//**去掉字符串进行转义等等操作*/
            function trim(userContents) {
                return userContents.replace(/(^\s*)|(\s*$)/g, "");
            }
            let keywords = trim(userContents)
            //判断处理过后的关键词是否为空字符串
            if(keywords === '' || keywords == null){
                alert('关键词不能为空！')
                return 
            }
            //设置state keywords
            this.setState({
                keywords: keywords
            })
            //将关键词放入redux
            Store.dispatch(modifySearchKeywords(keywords))                            
            //向后台发起请求数据
            let SearchData = getData.getDataByGet('http://114.67.151.28:5000/api/search?keywords=' + keywords)
            SearchData
                .then((response) => { return response.json() })
                .then((result) => {
                    
                    //1.将搜素结果放入redux 中
                    Store.dispatch(modifySearchResult(result.data))
                    //2.跳转到搜索结果页面 
                    this.props.history.push('/search') 
                })
                .catch((error) => {
                    console.log('获取数据失败！')
                })
            
        }
    }
    render(){
        return (
            <div className='indexHeader'>
                <div className="cityBox">
                    <Link to='/city' className="cityText">
                        <span className="cityName">{this.cityName}</span>
                       <i className='fa fa-angle-down'></i>
                   </Link>
                </div>
                <div className="searchBox">
                 <div className="center">
                     <i className='fa fa-search'></i>
                     <input type="text" placeholder='请输入关键词' onKeyDown={this.onSearch.bind(this)}/>
                 </div>
                </div>
                <div className="userBox" onClick={this.onUser.bind(this)}>
             
                 <i className='fa fa-user-circle-o' ></i>
                
                </div>
            </div>
        )
    }

    componentDidMount(){
        //
    }
}
export default IndexHeader