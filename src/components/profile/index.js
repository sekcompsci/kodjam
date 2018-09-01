import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Col, Row} from 'antd';
import {TiArrowLeftThick, TiCogOutline} from "react-icons/ti";
import './profile.scss';

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
            <Row gutter={8} style={{margin: '10px 8px'}}>
                <Col span={8}>
                    <div className="profile-stat">
                        <div style={{marginTop: '0.4em'}}>
                            <div><b>500</b></div>
                            <div>Follow</div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="profile-stat">Favorite</div>
                </Col>
                <Col span={8}>
                    <div className="profile-stat">Test</div>
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