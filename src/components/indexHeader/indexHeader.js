import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import getData from '../../util/getData'
import './indexHeader.less'
class IndexHeader extends Component {
    constructor(props){
        super(props)
        this.state={
            keywords:''
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
            //向后台发起请求数据
            let SearchData = getData.getDataByGet('http://localhost:5000/api/search?keywords=' + keywords)
            SearchData
                .then((response) => { return response.json() })
                .then((result) => {
                    //1.将搜素结果放入redux 中
                    
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
                       <span className="cityName">西安</span>
                       <i className='fa fa-angle-down'></i>
                   </Link>
                </div>
                <div className="searchBox">
                 <div className="center">
                     <i className='fa fa-search'></i>
                     <input type="text" placeholder='请输入关键词' onKeyDown={this.onSearch.bind(this)}/>
                 </div>
                </div>
                <div className="userBox">
                    <Link to='/user/all' className="cityText">
                 <i className='fa fa-user-circle-o'></i>
                 </Link>
                </div>
            </div>
        )
    }
}
export default IndexHeader