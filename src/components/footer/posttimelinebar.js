import React, {Component} from 'react';
import {Menu} from 'antd';
const PostTimelineBar=(props)=>{
    if(props.isFirst){
        return(
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px', textAlign: 'center', width: '100%', position: 'fixed', bottom: 0, left: 0}}
        >
        
            <Menu.Item key="FlagBlue">FlagBlue</Menu.Item>
            </Menu> 
        )

    }
    else{
        return(
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px', textAlign: 'center', width: '100%', position: 'fixed', bottom: 0, left: 0}}
        >
        
            <Menu.Item key="FlagGreen">FlagGreen</Menu.Item>
            <Menu.Item key="FlagRed">FlagRed</Menu.Item>
            </Menu> 
        )

    }
    
}
export default PostTimelineBar