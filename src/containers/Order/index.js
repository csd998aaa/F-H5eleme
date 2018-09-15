import React, { Component } from 'react';
import { ElemeHeader } from "../../components/ElemeHeader";
import style from "./style.less";
export default class Order extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }
    componentWillMount() {
        document.documentElement.style.backgroundColor = '#f5f5f5';
    }
    componentWillUnmount() {
        document.documentElement.style.backgroundColor = '#fff';
    }
    render() {
        return (
            <div className="order-wrap">
                <ElemeHeader title="订单" />
                <section>
                    <img src={require('../../assets/images/order_initbg.png')} alt="" />
                    <h3>登录后查看外卖订单</h3>
                    <button onClick={this.handleLogin}>立即登录</button>
                </section>
            </div>
        )
    }
}