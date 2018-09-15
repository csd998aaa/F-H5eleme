import React from 'react';
import { Link } from "react-router-dom";

import address from '../../../assets/images/address.svg';
import download from '../../../assets/images/download.svg';
import share from '../../../assets/images/share.svg';
import star from '../../../assets/images/star.svg';
import talk from '../../../assets/images/talk.svg';

import style from './linkItem.less';
export const LinkItem = ({ text, icon }) => {
    let i = (icon == 'address' ? address : '')
        || (icon == 'download' ? download : '')
        || (icon == 'share' ? share : '')
        || (icon=='star'?star:'')
        || (icon=='talk'?talk:'') ;
    return (
        <Link className="link-item" to='#/'>
            <aside><i style={{ background: `url(${i})` }}></i></aside>
            <div>
                {text}
                <span></span>
            </div>
        </Link>
    )
}