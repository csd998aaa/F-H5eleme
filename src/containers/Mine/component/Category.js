import React from 'react';
import { Link } from "react-router-dom";
import style from './category.less';
import category1 from "../../../assets/images/category1.svg";
import category2 from "../../../assets/images/category2.svg";
import category3 from "../../../assets/images/category3.svg";

const CategoryItem = () => {
    const cateList = [{
        path: '/login',
        text: '钱包',
        icon: category1,
    }, {
        path: '/login',
        text: '红包',
        icon: category2,
    }, {
        path: '/login',
        text: '金币',
        icon: category3,
    }]
    return (
        <div className="cate-wrap">
            {
                cateList.map(({ path, text, icon }, idx) => (
                    <Link to={path} key={idx}>
                        <p><i style={{ background: `url(${icon})` }}></i></p>
                        <p>{text}</p>
                    </Link>
                ))
            }
        </div>
    )
}
export const Category = () => {
    return (
        <div>
            <CategoryItem />
        </div>
    )
}