import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Col, Row} from 'antd';
import {TiArrowLeftThick, TiCogOutline} from "react-icons/ti";
import {createApp} from '../../actions/application';
import './profile.css';

import Footer from '../footer';

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
                <div className="profile-description">"{this.props.description}"</div>
            </div>
            <Row gutter={8} style={{margin: '10px 8px'}}>
                <Col span={8}>
                    <div className="profile-stat">
                        <div className="box">
                            <div><b>500</b></div>
                            <div className="title">Follow</div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="profile-stat">
                        <div className="box">
                            <div><b>24</b></div>
                            <div className="title">Favorite</div>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="profile-stat">
                        <div className="box">
                            <div><b>100</b></div>
                            <div className="title">Timeline</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Footer typeBar="main" />
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
        name: state.name,
        description: "ฝันอะไรไว้หลากหลาย เป็นอะไรก็ได้ที่อยากเป็น"
    }
};

const mapDispatchToProps = {
    createApp
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)