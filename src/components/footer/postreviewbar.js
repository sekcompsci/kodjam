import React, {Component} from 'react';
import {Menu} from 'antd';
const PostReviewBar=()=>{
    return(
    <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    style={{lineHeight: '64px', textAlign: 'center', width: '100%', position: 'fixed', bottom: 0, left: 0}}
>

    <Menu.Item key="3ColorFlag">3ColorFlag</Menu.Item>

    </Menu>
    )
    
}
export default PostReviewBar