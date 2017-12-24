import { combineReducers } from 'redux'
import {MODIFY_CITY,USER_LOGIN,MODIFY_INDEX_LIST,MODIFY_KEYWORDS,MODIFY_SEARCH_RESULT} from '../actions/actions'
 //初始化InitStateTree
const initalState = {
	//用户信息
	userName:null,
	//首页推荐数据
	indexRecommendData:[],
    //搜索关键词
	keywords:null,
	//搜索结果
	searchResult:[],
	//当前默认城市
	cityName:'北京'
}
/*--------------action 对应实现功能的函数 begin----------------- */
//修改城市名称
function modifyCityName(cityName){
	initalState.cityName = cityName
	return initalState
}
//用户登录
function userLogin(userName){
    initalState.userName = userName
	return initalState
}
//修改首页推荐数据
function modifyRecommendResut (data){
  initalState.indexRecommendData = data
	return initalState
}
//修改搜索关键词
function modifyKeywords(keywords){
 initalState.keywords = keywords
	return initalState
}
//修改搜索结果
function modifySearchResult(data){
  initalState.searchResult = data
	return initalState
}
/*--------------action 对应实现功能的函数 结束----------------- */
//ation 对应的处理函数
function reducers(state = initalState , action){
  
  switch(action.type){
   //修改城市名称action
   case MODIFY_CITY : return modifyCityName(action.cityName); break;
   //用户登录action
   case USER_LOGIN : return userLogin(action.userName); break;
   //修改首页推荐数据
   case MODIFY_INDEX_LIST : return modifyRecommendResut(action.data); break;
   //修改搜索关键词
   case MODIFY_KEYWORDS : return modifyKeywords(action.keywords); break;
   //修改搜索结果
   case MODIFY_SEARCH_RESULT : return modifySearchResult(action.data); break;
   //默认或者没有对应的actioin
   default : return state 
  }

}
//合成action 和 reducers 如果匪类太多将reducers 分开写 在合并

const appReducers = combineReducers({reducers})

export default appReducers

