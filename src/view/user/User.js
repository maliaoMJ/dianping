import React, { Component } from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import { Route, Switch, NavLink} from 'react-router-dom'
import AllOrder from '../../components/AllOrder/AllOrder'
import CanUse from '../../components/CanUse/CanUse'
import Reimburse from '../../components/Reimburse/Reimburse'
import PengingPayList from '../../components/PendingPayList/PendingPayList'
import './User.less'
class User extends Component{
    render(){
        return (
            <div className="User">
                <BackHeader title="用户详情" history={this.props.history}></BackHeader>
                <div className="top">
                    <img className="userImg" src="../img/me.jpg" alt="" />
                    <div className="baseInfo">
                        <h4>文艺青年</h4>
                    </div>
                </div>
                <div className="tabBox">
                    <div className="tabItem"><NavLink className="hrefItem" to='/user/all'>全部订单</NavLink></div>
                    <div className="tabItem"><NavLink className="hrefItem" to='/user/pendingpay'>待付款</NavLink></div>
                    <div className="tabItem"><NavLink className="hrefItem" to='/user/canuse'>可使用</NavLink></div>
                    <div className="tabItem"><NavLink className="hrefItem" to='/user/reimburse'>退款/售后</NavLink></div>
                </div>
                <div className="resultBox">
                    <Switch>
                        <Route exact path={'/user/all'} component={AllOrder}></Route>
                        <Route exact path={'/user/pendingpay'} component={CanUse}></Route>
                        <Route exact path={'/user/canuse'} component={Reimburse}></Route>
                        <Route exact path={'/user/reimburse'} component={PengingPayList}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default User