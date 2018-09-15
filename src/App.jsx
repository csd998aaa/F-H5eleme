import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import style from './style.less';

const LinkList = [
    {
        path: '/',
        text: '首页',
        inconStyle: 'bg-img1'
    }, {
        path: '/found',
        text: '发现',
        inconStyle: 'bg-img2'
    }, {
        path: '/order',
        text: '订单',
        inconStyle: 'bg-img3'
    }, {
        path: '/mine',
        text: '我的',
        inconStyle: 'bg-img4'
    }
];

const App = ({ children }) => {
    return (
        <div>
            {children}
            <footer>
                <ul className="tarBar">
                    {
                        LinkList.map((val, index) => (
                            <li key={index} ><NavLink activeClassName="active-navBar" exact to={val.path} >
                                <i className={val.inconStyle}></i>
                                <span>{val.text}</span></NavLink>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </div>
    )
}

export default App;