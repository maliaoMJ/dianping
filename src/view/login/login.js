import React, {Component} from 'react'
import BackHeader from '../../components/BackHeader/BackHeader'
import { userLogin} from '../../actions/actions'
import Store from '../../store/store'
import './login.less'


class Login extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            userName:'',
            userPassword:''
        }
    }

    //注册
    onRegister(){
        alert('拒绝注册！')
    }
    //change userName
    onChangeUserName(e){
        this.setState({
            userName:e.target.value
        })
    }

    //change userPassword
    onChangeUserPassword(e) {
        this.setState({
            userPassword: e.target.value
        })
    }
    //login
    onLogin(e){
      //1.获取表单的值
      let userName = this.state.userName

    //   let userPassword = this.state.userPassword 用不到
      //2.对表单的值进行处理
      // 此处略 
      //3.将信息添加到redux中 cookie  然后跳转用户页面   模拟成功 失败没有写
        Store.dispatch(userLogin(userName))
        this.props.history.push('/user')
      
    }
    

    render(){
        return (
            <div className="Login">
                <BackHeader title={'用户登录'} history={this.props.history}></BackHeader>  
                <div className="formBox">
                    <div className="userBox">
                        <i className="fa fa-user"></i>
                        <input type="text" placeholder='用户名/邮箱' onChange={this.onChangeUserName.bind(this)} />
                    </div>
                    <div className="passwordBox">
                        <i className="fa fa-key"></i>
                        <input type="password" placeholder='密码' onChange={this.onChangeUserPassword.bind(this)} />
                    </div>
                    <div className="btnBox">
                        <div className="btn register" onClick={this.onRegister}>注册</div>
                        <div className="btn login" onClick={this.onLogin.bind(this)}>登录</div>
                    </div>
                    <h3 className="title">第三方登录</h3>
                    <div className="moreLoginBox">
                        <div className="space"></div>
                       <i className="fa fa-github"></i>
                        <div className="space"></div>
                       <i className="fa fa-weixin"></i>
                        <div className="space"></div>
                       <i className="fa fa-weibo"></i>
                        <div className="space"></div>
                        <i className="fa fa-qq"></i>
                        <div className="space"></div>
                    </div>
                </div>
                <div className="footer">
                  Copyright ©2017 dianping Powered By KASA  
                </div>
            </div>
        )
    }
}


export default Login