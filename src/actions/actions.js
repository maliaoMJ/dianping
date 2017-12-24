//修改城市
export const MODIFY_CITY = 'MODIFY_CITY'
//用户登录
export const USER_LOGIN = 'USER_LOGIN'
//首页推荐数据
export const MODIFY_INDEX_LIST = 'MODIFY_INDEX_LIST'
//搜索关键词
export const MODIFY_KEYWORDS = 'MODIFY_KEYWORDS'
//搜索结果数据
export const MODIFY_SEARCH_RESULT= 'MODIFY_SEARCH_RESULT'


//Action Creator

//修改城市
export function modifyCityName(cityName){
	return{
		type:MODIFY_CITY,
		cityName:cityName
	}
}
//首页推荐数据
export function modifyRecommendResult(data){
	return{
		type:MODIFY_CITY,
		data
	}
}
//用户登录
export function userLogin(userName){
	return{
		type:MODIFY_CITY,
		userName
	}
}
//搜索关键词
export function modifySearchKeywords(keywords){
	return{
		type:MODIFY_CITY,
		keywords
	}
}
//搜索结果数据
export function modifySearchResult(data){
	return{
		type:MODIFY_CITY,
		data
	}
}
