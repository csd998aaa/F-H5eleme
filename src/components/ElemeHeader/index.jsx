import React, { Component } from 'react';
import style from './style.less';
export const ElemeHeader = ({ title }) => {
    return (
        <header style={{overflow:'hidden',height:'.8rem'}}>
            <div className="eleme_header_wrap">
                <h1>{title}</h1>
            </div>
        </header>
    )
}