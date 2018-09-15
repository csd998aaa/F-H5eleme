import React, { Component } from 'react';
import style from "./style.less";

export default class Login extends Component {
    componentWillMount() {
        document.title = '登录'
    }
    
    render() {
        return (
            <div className="container">
                <div>
                    <div className="logo-bg"></div>
                    <div className="login_sub"><span>短信登录</span></div>
                </div>
                <div className="form-box">
                    <section>
                        <input type="tel"  maxLength="11" placeholder="手机号"  />
                        <button>获取验证码</button>
                    </section>
                    <section>
                        <input type="tel" placeholder="验证码" />
                    </section>
                    <section className="message-login">
                        <span>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意<a>《用户服务协议》</a></span>
                    </section>
                    <button>登录</button>
                    <a>关于我们</a>
                </div>
            </div>
        )
    }
}