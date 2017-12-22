import React,{Component} from 'react'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import ListItem from '../../components/ListItem/ListItem'
import getData from '../../util/getData'
import './Search.less'


class Search extends Component{

   constructor(props){
       super(props)
       this.state={
           listData:[]
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
            </div>
        )
    }
    componentDidMount(){
        // 2.获取首页推荐列表数据 返回的结果均为Promise
        let ListData = getData.getDataByGet('http://localhost:5000/api/search')
        ListData
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                console.log(result.data)
                //设置listData
                this.setState({
                    listData: result.data,
                    hasMore: result.hasMore
                })
            })
            .catch((error) => {
                console.log('获取首页列表失败')
            })
    }
}

export default Search