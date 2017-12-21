import React, {Component} from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import './City.less'

class City extends Component{
    constructor(props){
        super(props)
        this.state={
            currentCity:{id:'beijing',value:'北京'},
        }
    }
    changeCity(city){
        // 修改state
     this.setState({
         currentCity:city
     })
    //  修改redux中currentCityName
    }
    render(){
        const {currentCity} = this.state
        return (
            <div className="City">
               <BackHeader title="选择城市" history={this.props.history}></BackHeader>
                <div className="currentCity">
                    <span>{currentCity.value}</span>
                </div>
                <h3 className="hotCityTitle">热门城市</h3>
                <div className="CityBox">
                    {/* 反思：此处不应该这么写 可以从后台传数据 遍历 生成结果 */}
                    <div onClick={this.changeCity.bind(this,{id:'beijing',value:'北京'})} className={currentCity.id === 'beijing' ? 'cityItem active' :'cityItem'}>北京</div>
                    <div onClick={this.changeCity.bind(this,{id:'shanghai',value:'上海'})} className={currentCity.id === 'shanghai' ? 'cityItem active' :'cityItem'}>上海</div>
                    <div onClick={this.changeCity.bind(this,{id:'hangzhou',value:'杭州'})} className={currentCity.id === 'hangzhou' ? 'cityItem active' :'cityItem'}>杭州</div>
                    <div onClick={this.changeCity.bind(this,{id:'guangzhou',value:'广州'})} className={currentCity.id === 'guangzhou' ? 'cityItem active' :'cityItem'}>广州</div>
                    <div onClick={this.changeCity.bind(this, { id: 'suzhou', value: '苏州' })} className={currentCity.id === 'suzhou' ? 'cityItem active' :'cityItem'}>苏州</div>
                    <div onClick={this.changeCity.bind(this, { id: 'shenzhen', value: '深圳' })} className={currentCity.id === 'shenzhen' ? 'cityItem active' :'cityItem'}>深圳</div>
                    <div onClick={this.changeCity.bind(this, { id: 'nanjing', value: '南京' })} className={currentCity.id === 'nanjing' ? 'cityItem active' :'cityItem'}>南京</div>
                    <div onClick={this.changeCity.bind(this, { id: 'tianjin', value: '天津' })} className={currentCity.id === 'tianjin' ? 'cityItem active' :'cityItem'}>天津</div>
                    <div onClick={this.changeCity.bind(this, { id: 'chongqing', value: '重庆' })} className={currentCity.id === 'chongqing' ? 'cityItem active' :'cityItem'}>重庆</div>
                    <div onClick={this.changeCity.bind(this, { id: 'xiamen', value: '厦门' })} className={currentCity.id === 'xiamen' ? 'cityItem active' :'cityItem'}>厦门</div>
                    <div onClick={this.changeCity.bind(this, { id: 'wuhan', value: '武汉' })} className={currentCity.id === 'wuhan' ? 'cityItem active' :'cityItem'}>武汉</div>
                    <div onClick={this.changeCity.bind(this, { id: 'xian', value: '西安' })} className={currentCity.id === 'xian' ? 'cityItem active' :'cityItem'}>西安</div>
                </div>
            </div>
        )
    }
}
export default City