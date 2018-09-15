import React, { Component } from 'react';
import { ElemeHeader } from "../../components/ElemeHeader";
import style from './style.less';

import { Category } from "./component/Category";

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentWillMount() {
        document.documentElement.style.backgroundColor = '#f5f5f5';
    }
    componentWillUnmount() {
        document.documentElement.style.backgroundColor = '#fff';
    }
    handleLogin() {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <ElemeHeader title="我的" />
                <section>
                    <div className="profile" onClick={this.handleLogin}>
                        <div className="logo">
                            <img src={require('../../assets/images/profileImg.png')} alt="" />
                        </div>
                        <div className="profile_text">
                            <p>登录/注册</p>
                            <p><span className="phoneIcon"></span>登录后享受更多特权</p>
                        </div>
                        <span className="more"></span>
                    </div>
                </section>
                <section>
                    <Category />
                </section>
            </div>
        )
    }
}