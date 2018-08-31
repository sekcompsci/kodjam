import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class FooterBar extends Component {
    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px', textAlign: 'center', width: '100%', position: 'fixed', bottom: 0, left: 0 }}
            >
             
                <Menu.Item key="SearchBar">Search</Menu.Item>
                   
                <Menu.Item key="FlagBar">Flag</Menu.Item>
               
                <Menu.Item key="ProfileBar">Profile</Menu.Item>
                 
            </Menu>
        )
    }
}

export default FooterBar