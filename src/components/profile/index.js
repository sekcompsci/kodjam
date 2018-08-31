import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Card, Col, Row} from 'antd';
import {TiArrowLeftThick, TiCogOutline} from "react-icons/ti";
import './profile.css';

import {createApp} from '../../actions/application';

class Profile extends React.Component {
    render() {
        return <div>
            <header className="avatar-header">
                <TiArrowLeftThick className="icon-app"/>
                <TiCogOutline className="icon-app" style={{float: 'right'}}/>
            </header>
            <Row type="flex" justify="center">
                <Col className="avatar"><Avatar shape="square" size={120} icon="user"/></Col>
            </Row>
            <div style={{textAlign: 'center', paddingTop: '5px'}}>
                <div className="profile-name">{this.props.name}</div>
                <div className="profile-description">ฝันอะไรไว้หลากหลาย เป็นอะไรก็ได้ที่อยากเป็น</div>
            </div>
            <Row gutter={8} style={{padding: '10px'}}>
                <Col className="profile-stat" span={6}>
                    <Card>Follow</Card>
                </Col>
                <Col className="profile-stat" span={6}>
                    <Card>Favorite</Card>
                </Col>
                <Col className="profile-stat" span={6}>
                    <Card>Test</Card>
                </Col>
                <Col className="profile-stat" span={6}>
                    <Card>Test</Card>
                </Col>
            </Row>
        </div>
    }
}

Profile.propTypes = {
    name: PropTypes.string
};

Profile.defaultProps = {
    name: 'สิรวิชญ์ มูลรินต๊ะ'
};

const mapStateToProps = state => {
    return {
        name: state.name
    }
};

const mapDispatchToProps = {
    createApp
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)