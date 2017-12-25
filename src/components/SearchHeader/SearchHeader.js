import React, {Component} from 'react'
import getData from '../../util/getData'
import { modifySearchKeywords, modifySearchResult } from '../../actions/actions'
import Store from '../../store/store'
import './SearchHeader.less'


class SearchHeader extends Component{

    constructor(props){
        super(props)
        this.state = {
            keywords: Store.getState().reducers.keywords ? Store.getState().reducers.keywords:''
        }
    }

    //goBack返回
    goBack(){
        this.props.history.go(-1)
    }
    changeKeywords(e){
      this.setState({
          keywords:e.target.value
      })
    }
    //搜索函数
    SearchResult (e){
        //按下enter键触发事件
        if (e.keyCode === 13) {
            //获取用户的输入内容
            let userContents = e.target.value
            //对用户输入的内容进行处理
            /**去掉字符串前后所有空格*//**去掉字符串进行转义等等操作*/
            function trim(userContents) {
                return userContents.replace(/(^\s*)|(\s*$)/g, "");
            }
            let keywords = trim(userContents)
            //判断处理过后的关键词是否为空字符串
            if (keywords === '' || keywords == null) {
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
            let SearchData = getData.getDataByGet('http://localhost:5000/api/search?keywords=' + keywords)
            SearchData
                .then((response) => { return response.json() })
                .then((result) => {
                    //1.将搜素结果放入redux 中
                    
                    Store.dispatch(modifySearchResult(result.data))
                })
                .catch((error) => {
                    console.log('获取搜索数据失败！')
                })

        }
    }
    render(){
        return (
            <div className="SearchHeader">
                <i className="fa fa-angle-left left" onClick={this.goBack.bind(this)}></i>
                <div className="searchBox">
                    <div className="box">
                        <i className="fa fa-search"></i>
                        <input type="text" onKeyDown={this.SearchResult.bind(this)} onChange={this.changeKeywords.bind(this)} value={this.state.keywords}/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}


export default SearchHeader